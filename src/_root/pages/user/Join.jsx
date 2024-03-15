import React, { useCallback, useState } from "react";
import { useTheme } from "@emotion/react";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { PrimaryButton } from "@/components/ui/buttons";
import {
  BirthField,
  EmailField,
  NameField,
  PasswordConfirmField,
  PasswordField,
} from "@/components/ui/form/Fields";
import { Flex } from "antd";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodJoin } from "@/libs/zod/zodValidation";
import { PhoneVerificationFields, SelectAllBoxes } from "@/components/ui/form";
import { TermModal } from "@/components/ui/modal";
import { mq } from "@/libs/react-responsive/mediaQuery";

const TermButton = styled.button(({ theme }) => ({
  color: theme.color.grey01,
  fontSize: "1.2rem",
  textDecoration: "underline",
  lineHeight: "1.4rem",
  marginLeft: "0.6rem",
}));

const NameBirthContainer = styled(Flex)(() => ({
  flexDirection: "column",

  [mq("desktop")]: {
    flexDirection: "row",
  },
}));

const Join = () => {
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
    defaultValues: {
      user_email: "",
      user_password: "",
      phone_verified: true,
    },
  });

  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

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
      value: "personal_info",
    },
  ];

  const handleTermModal = useCallback(type => {
    setTermModalOpen(type);
  }, []);

  const onCancel = useCallback(() => {
    setTermModalOpen("");
  }, []);

  return (
    <CommonPageContainer>
      <CommonContainer>
        <TermModal onCancel={onCancel} termModalOpen={termModalOpen} />

        <CommonTitleTwo>이메일 회원가입</CommonTitleTwo>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <EmailField control={control} />

              <PasswordField control={control} />

              <PasswordConfirmField control={control} />

              <NameBirthContainer justify="space-between" gap="1rem">
                <NameField control={control} />

                <BirthField control={control} />
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
