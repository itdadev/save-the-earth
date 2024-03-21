import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";

import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { PrimaryButton } from "@/components/ui/buttons";
import {
  BirthField,
  EmailCheckField,
  EmailField,
  NameField,
  PasswordConfirmField,
  PasswordField,
} from "@/components/ui/form/Fields";
import { PhoneVerificationFields, SelectAllBoxes } from "@/components/ui/form";
import { TermModal } from "@/components/ui/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { mq } from "@/libs/react-responsive/mediaQuery";
import { zodJoin } from "@/libs/zod/zodValidation";
import { useMutation } from "@tanstack/react-query";
import { USER_API_URL } from "@/constants/apiUrls";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { replaceAllDash } from "@/utils/Functions";
import {
  DUPLICATE_USER_EMAIL,
  DUPLICATE_USER_PHONE,
  SUCCESS_CODE,
} from "@/constants/responseResults";

const TermButton = styled.button(({ theme }) => ({
  color: theme.color.grey01,
  fontSize: "1.2rem",
  textDecoration: "underline",
  lineHeight: "1.4rem",
  marginLeft: "0.6rem",
}));

export const NameBirthContainer = styled(Flex)(() => ({
  flexDirection: "column",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const Join = () => {
  const userData = useLocation().state?.userData;

  console.log(userData, "user data");

  const loginType = useParams().loginType;
  const navigate = useNavigate();
  const theme = useTheme();

  const [termModalOpen, setTermModalOpen] = useState("");

  const {
    control,
    handleSubmit,
    trigger,
    watch,
    setError,
    clearErrors,
    resetField,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodJoin),
    defaultValues: {
      user_email: "",
      user_password: loginType !== "email" ? "qweqwe123" : "",
      confirm_password: loginType !== "email" ? "qweqwe123" : "",
      user_name: "",
      user_birth: "",
      user_phone: "",
      phone_verified: true,
      login_type: "email",
      user_email_checked: false,
    },
  });

  const termOptions = [
    {
      label: (
        <div>
          <span>[필수] 이용 약관 동의</span>

          <TermButton
            type="button"
            onClick={() => setTermModalOpen("use_term")}
          >
            보기
          </TermButton>
        </div>
      ),
      value: "use_term",
    },
    {
      label: (
        <div>
          <span>[필수] 개인정보 처리 방침 동의</span>

          <TermButton
            type="button"
            onClick={() => setTermModalOpen("privacy_policy")}
          >
            보기
          </TermButton>
        </div>
      ),
      value: "privacy_policy",
    },
    {
      label: (
        <div>
          <span>[선택] 이메일 수신 동의</span>
        </div>
      ),
      value: "email_receive_yn",
    },
  ];

  const { mutate: joinUser } = useMutation({
    mutationFn: async data => {
      return await axios.post(USER_API_URL, { ...data, login_type: loginType });
    },
    onSuccess: data => {
      console.log(data);
      if (data?.data.code === SUCCESS_CODE) {
        navigate("/login", {
          state: { joinSuccess: true },
        });
      }
    },
    onError: error => {
      if (error.response.data.code === DUPLICATE_USER_EMAIL) {
        setError("user_email", { message: "이미 가입된 이메일입니다." });

        setFocus("user_email");
      }

      if (error.response.data.code === DUPLICATE_USER_PHONE) {
        setError("user_phone", { message: "이미 가입된 휴대폰 번호입니다." });

        setFocus("user_phone");
      }
    },
  });

  useEffect(() => {
    if (userData) {
      setValue("user_email", userData?.email);
      setValue("user_name", userData?.name);
      setValue("user_birth", userData?.birthyear);
      setValue("user_phone", userData?.phone_number.replace("+82 ", "0"));
    }
  }, []);

  const handleTermModal = useCallback(type => {
    setTermModalOpen(type);
  }, []);

  const onCancel = useCallback(() => {
    setTermModalOpen("");
  }, []);

  const onSubmit = useCallback(
    data => {
      const modifiedData = {
        ...data,
        user_phone: replaceAllDash(data.user_phone),
        user_birth: replaceAllDash(data.user_birth),
        login_type: loginType,
        user_password: loginType !== "email" ? "" : data.user_password,
        confirm_password: loginType !== "email" ? "" : data.confirm_password,
        sns_key: loginType === "email" ? "" : userData?.id,
      };

      joinUser(modifiedData);
    },
    [joinUser, loginType, userData?.id],
  );

  return (
    <CommonPageContainer>
      <CommonContainer>
        <TermModal onCancel={onCancel} termModalOpen={termModalOpen} />

        <CommonTitleTwo>
          {loginType === "kakao"
            ? "카카오"
            : loginType === "google"
              ? "구글"
              : "이메일"}{" "}
          회원가입
        </CommonTitleTwo>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <EmailCheckField
                control={control}
                watch={watch}
                trigger={trigger}
                setError={setError}
                setValue={setValue}
              />

              {loginType === "email" && (
                <>
                  <PasswordField control={control} />

                  <PasswordConfirmField control={control} />
                </>
              )}

              <NameBirthContainer justify="space-between" gap="1rem">
                <NameField control={control} />

                <BirthField control={control} setValue={setValue} />
              </NameBirthContainer>

              <PhoneVerificationFields
                control={control}
                clearErrors={clearErrors}
                setError={setError}
                resetField={resetField}
                setValue={setValue}
                watch={watch}
                errors={errors}
              />

              <SelectAllBoxes
                title="약관 동의"
                options={termOptions}
                control={control}
                setValue={setValue}
                watch={watch}
                errors={errors}
                handleTermModal={handleTermModal}
              />
            </div>
          </div>

          <SubmitButtonWrapper justify="center">
            <PrimaryButton
              bgColor={theme.color.secondary02}
              buttonType="submit"
            >
              회원가입
            </PrimaryButton>
          </SubmitButtonWrapper>
        </FormContainer>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default Join;
