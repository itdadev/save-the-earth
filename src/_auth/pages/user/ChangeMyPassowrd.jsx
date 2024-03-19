import React, { useCallback } from "react";
import { color } from "@/theme";
import { useForm } from "react-hook-form";
import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodChangeMyPassword } from "@/libs/zod/zodValidation";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import {
  NewPasswordField,
  PasswordConfirmField,
  PasswordField,
} from "@/components/ui/form/Fields";
import { PrimaryButton } from "@/components/ui/buttons";

const ChangeMyPassword = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(zodChangeMyPassword),
    defaultValues: {
      user_password: "",
      confirm_password: "",
      new_password: "",
    },
  });

  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>비밀번호 변경하기</CommonTitleTwo>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <PasswordField control={control} current />

              <NewPasswordField control={control} />

              <PasswordConfirmField control={control} />
            </div>
          </div>

          <SubmitButtonWrapper justify="center">
            <PrimaryButton bgColor={color.secondary02} buttonType="submit">
              변경하기
            </PrimaryButton>
          </SubmitButtonWrapper>
        </FormContainer>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default ChangeMyPassword;
