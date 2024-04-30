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
import { changeBirthFormat, replaceAllDash } from "@/utils/Functions";
import { SUCCESS_CODE } from "@/constants/responseResults";

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

  const loginType = useParams().loginType;
  const navigate = useNavigate();
  const theme = useTheme();

  const [termModalOpen, setTermModalOpen] = useState("");

  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodJoin),
    mode: "onSubmit",
    reValidateMode: "onBlur",
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
      auth_code: "",
      sns_key: "",
      use_term: false,
      privacy_policy: false,
      email_receive_yn: false,
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
      if (data?.data.code === SUCCESS_CODE) {
        navigate("/login", {
          state: { joinSuccess: true },
        });
      }
    },
    onError: error => {},
  });

  useEffect(() => {
    if (userData) {
      setValue("user_email", userData?.email);
      setValue("user_name", userData?.name);

      if (
        (loginType === "kakao" && userData?.birthyear) ||
        (loginType === "kakao" && userData?.phone_number)
      ) {
        setValue(
          "user_birth",
          changeBirthFormat(userData?.birthyear + userData?.birthday),
        );

        setValue("user_phone", userData?.phone_number?.replace("+82 ", "0"));
      } else {
        setValue("user_birth", "");
        setValue("user_phone", "");
      }

      setValue("login_type", loginType);
      setValue("user_email_checked", false);

      if (loginType !== "email") {
        setValue("user_password", "qweqwe123");
        setValue("confirm_password", "qweqwe123");
      }
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
        sns_key: loginType === "email" ? "" : String(userData?.id),
      };

      joinUser(modifiedData);
    },
    [loginType, joinUser, userData?.id],
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
