import React, { useCallback, useEffect, useRef, useState } from "react";
import { Flex } from "antd";
import Countdown, { zeroPad } from "react-countdown";
import styled from "@emotion/styled";

import { ErrorMessage } from "@/components/ui/form/TextInput";
import { VERIFICATION_CODE_PH } from "@/constants/placeholderTexts";
import { PhoneField } from "@/components/ui/form/Fields";

import { TextInput } from ".";

export const CODE_EXPIRE_TIME = 5 * 60 * 1000; // 5분

const SendButton = styled.div(({ theme, disabled }) => ({
  background: theme.color.primary01,
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  cursor: disabled ? "default" : "pointer",
  pointerEvents: disabled ? "none" : "auto",
  height: "4rem",
  borderRadius: "0.8rem",
  padding: "0 2rem",
}));

const PhoneVerificationFields = ({ watch, control, errors, setValue }) => {
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
              disabled={codeVerified}
              onClick={() => startTimer()}
            >
              코드 전송
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
            <SendButton
              type="button"
              disabled={(!codeActive && !codeExpired) || codeVerified}
            >
              인증번호 확인
            </SendButton>
          }
        />
      </Flex>
    </>
  );
};

export default PhoneVerificationFields;
