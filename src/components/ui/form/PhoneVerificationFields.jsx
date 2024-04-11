import React, { useCallback, useEffect, useRef, useState } from "react";
import { Flex } from "antd";
import Countdown, { zeroPad } from "react-countdown";
import styled from "@emotion/styled";

import axios from "axios";
import { ErrorMessage } from "@/components/ui/form/TextInput";
import { VERIFICATION_CODE_PH } from "@/constants/placeholderTexts";
import { PhoneField } from "@/components/ui/form/Fields";

import { TextInput } from ".";
import { useMutation } from "@tanstack/react-query";
import {
  DIFFERENT_PHONE_INVALID,
  PHONE_ALREADY_EXISTS,
  PHONE_REQUIRED,
  VERIFICATION_CODE_INVALID,
} from "@/constants/inputErrorMessage";
import { CHECK_CODE_API_URL, SEND_CODE_API_URL } from "@/constants/apiUrls";
import { replaceAllDash } from "@/utils/Functions";
import { DUPLICATE_USER_PHONE } from "@/constants/responseResults";
import { Loading } from "@/components/shared/item";

export const CODE_EXPIRE_TIME = 5 * 60 * 1000; // 5분

export const SendButton = styled.div(({ theme, disabled }) => ({
  background: disabled ? theme.color.grey05 : theme.color.primary01,
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  cursor: disabled ? "default" : "pointer",
  pointerEvents: disabled ? "none" : "auto",
  height: "4rem",
  borderRadius: "0.8rem",
  padding: "0 2rem",
  color: theme.color.black02,
}));

const PhoneVerificationFields = ({
  watch,
  control,
  errors,
  setValue,
  resetField,
  setError,
  initialPhoneValue,
  clearErrors,
}) => {
  const timerRef = useRef(null);

  const [targetDate, setTargetDate] = useState(
    new Date().getTime() + CODE_EXPIRE_TIME,
  );

  const [codeActive, setCodeActive] = useState(false);

  const [codeSent, setCodeSent] = useState(false);

  const [codeExpired, setCodeExpired] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);

  const resetTimer = useCallback(() => {
    setTargetDate(new Date().getTime() + CODE_EXPIRE_TIME);
  }, [setTargetDate]);

  const startTimer = useCallback(() => {
    timerRef?.current.start();
  }, []);

  const stopTimer = useCallback(() => {
    timerRef.current.stop();
  }, []);

  const { mutate: sendCodeFunction, status: codeSendStatus } = useMutation({
    mutationFn: async data => {
      if (codeSent) {
        // CASE: 휴대폰 번호 다시 입력
        return "resend";
      }

      if (data === "") {
        // 전화 번호 입력 안하고 인증 코드 전송 눌렀을 때
        return PHONE_REQUIRED;
      }

      if (initialPhoneValue && data === initialPhoneValue) {
        // 회원 정보 수정시 기존의 유저 번호와 동일한 번호를 입력했을 때
        return DIFFERENT_PHONE_INVALID;
      }

      return await axios.post(SEND_CODE_API_URL, {
        user_phone: replaceAllDash(data),
      });
    },
    onSuccess: data => {
      if (data === "resend") {
        setCodeSent(true);
        setCodeActive(false);

        resetTimer();
        startTimer();
        resetField("auth_code");
        return;
      }

      if (typeof data === "string" && !!data && data !== "resend") {
        setError("phone", { message: data });
        return;
      }

      clearErrors("phone");

      startTimer();
      resetTimer();
      setCodeSent(true);
    },
    onError: error => {
      if (error.response.data.code === DUPLICATE_USER_PHONE) {
        setError("user_phone", { message: PHONE_ALREADY_EXISTS });

        setFocus("user_phone");
      }
    },
  });

  const { mutate: verifyCodeFunction, isPending } = useMutation({
    mutationFn: async data => {
      return await axios.post(CHECK_CODE_API_URL, { ...data });
    },
    onSuccess: () => {
      resetTimer();
      setCodeVerified(true);
      stopTimer();
      clearErrors("auth_code");
      setValue("phone_verified", true, { shouldValidate: true });
    },
    onError: error => {
      if (error?.response.status === 400) {
        setError("auth_code", { message: VERIFICATION_CODE_INVALID });
        setCodeVerified(false);
      }
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "auth_code" && value.auth_code !== "") {
        setCodeActive(true);
      } else {
        setCodeActive(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setCodeExpired(true);
    } else {
      return (
        <span>
          {zeroPad(minutes)} : {zeroPad(seconds)}
        </span>
      );
    }
  };

  const handleSendCode = useCallback(() => {
    sendCodeFunction(watch("user_phone"));
  }, [sendCodeFunction, watch]);

  const handleResendCode = useCallback(() => {
    setCodeActive(false);
    setCodeExpired(false);
    resetTimer();
    stopTimer();
    resetField("auth_code");
    handleSendCode();
  }, [resetTimer, resetField, handleSendCode, stopTimer]);

  const handleVerifyCode = useCallback(() => {
    verifyCodeFunction({
      user_phone: replaceAllDash(watch("user_phone")),
      auth_code: watch("auth_code"),
    });
  }, [verifyCodeFunction, watch]);

  return (
    <>
      <Flex>
        <PhoneField
          control={control}
          readOnly={codeSent || codeVerified}
          setValue={setValue}
          addonAfter={
            <SendButton
              type="primary"
              size="large"
              disabled={codeVerified || codeSendStatus === "pending"}
              onClick={() => {
                if (codeSent) {
                  setCodeSent(false);
                  resetTimer();
                  stopTimer();
                } else {
                  sendCodeFunction(watch("user_phone"));
                }
              }}
            >
              {codeSendStatus === "pending" ? (
                <Loading />
              ) : codeSent && !codeVerified ? (
                "휴대폰 번호 다시 입력"
              ) : codeVerified ? (
                "인증 완료"
              ) : (
                "코드전송"
              )}
            </SendButton>
          }
        />
      </Flex>

      <Flex>
        <TextInput
          name="auth_code"
          label="인증번호"
          labelrequired="true"
          control={control}
          placeholder={VERIFICATION_CODE_PH}
          bordered={false}
          customborder="true"
          readOnly={codeVerified || !codeSent}
          inputMode="numeric"
          autoComplete="one-time-code"
          labelafter={
            <ErrorMessage
              custom={{
                display:
                  codeSent && !codeExpired && !codeVerified ? "block" : "none",
              }}
            >
              <div style={{ marginTop: "0.4rem" }}>
                <Countdown
                  date={targetDate}
                  renderer={renderer}
                  ref={timerRef}
                  autoStart={false}
                />
              </div>
            </ErrorMessage>
          }
          customerror={
            errors.phone_verified ? errors.phone_verified?.message : ""
          }
          addonAfter={
            isPending ? (
              <Loading />
            ) : (
              <SendButton
                type="button"
                disabled={
                  (!codeActive && !codeExpired) || codeVerified || isPending
                }
                onClick={codeExpired ? handleResendCode : handleVerifyCode}
              >
                {codeExpired
                  ? "재전송"
                  : codeVerified
                    ? "인증 완료"
                    : "인증번호 확인"}
              </SendButton>
            )
          }
        />
      </Flex>
    </>
  );
};

export default PhoneVerificationFields;
