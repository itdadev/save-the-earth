import React, { useCallback } from "react";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { NameField } from "@/components/ui/form/Fields";
import { PhoneVerificationFields } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "@/components/ui/buttons";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodFindAccount } from "@/libs/zod/zodValidation";

const FindAccount = () => {
  const theme = useTheme();
  const navigate = useNavigate();

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
    resolver: zodResolver(zodFindAccount),
    defaultValues: {
      user_name: "",
      auth_code: "",
      phone_verified: true,
    },
  });

  const onSubmit = useCallback(
    data => {
      console.log(data);

      if (data) {
        navigate("/change-password");
      }
    },
    [navigate],
  );

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>계정 찾기</CommonTitleTwo>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <NameField control={control} />

          <PhoneVerificationFields
            control={control}
            clearErrors={clearErrors}
            setError={setError}
            resetField={resetField}
            setValue={setValue}
            watch={watch}
            errors={errors}
          />

          <SubmitButtonWrapper justify="center">
            <PrimaryButton
              bgColor={theme.color.secondary02}
              buttonType="submit"
            >
              계정 찾기
            </PrimaryButton>
          </SubmitButtonWrapper>
        </FormContainer>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default FindAccount;
