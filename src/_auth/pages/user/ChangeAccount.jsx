import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodChangeAccount } from "@/libs/zod/zodValidation";
import useUserStore from "@/store/useUserStore";

import { color } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { BirthField, EmailField, NameField } from "@/components/ui/form/Fields";
import { PhoneVerificationFields, SingleCheckBox } from "@/components/ui/form";
import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { PrimaryButton } from "@/components/ui/buttons";
import { NameBirthContainer } from "@/_root/pages/user/Join";
import { changeBirthFormat, changePhoneFormat } from "@/utils/Functions";

const ChangeAccount = () => {
  const { user } = useUserStore();

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
    resolver: zodResolver(zodChangeAccount),
    defaultValues: {
      user_email: user?.user_email,
      user_birth: "",
      user_name: "",
      user_phone: "",
      phone_verified: false,
    },
  });

  useEffect(() => {
    if (user) {
      setValue("user_email", user.email);
      setValue("user_name", user.name);
      setValue("user_phone", changePhoneFormat(user.phone));
      setValue("user_birth", changeBirthFormat(user.birth));
      setValue("user_email_send", user.emailSend);
    }
  }, [user]);

  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

  console.log(user);

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>프로필 정보 수정</CommonTitleTwo>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <EmailField control={control} disabled />

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

              <SingleCheckBox
                name="user_email_send"
                control={control}
                label="이메일 수신동의"
              />
            </div>
          </div>

          <SubmitButtonWrapper justify="center">
            <PrimaryButton bgColor={color.secondary02} buttonType="submit">
              회원가입
            </PrimaryButton>
          </SubmitButtonWrapper>
        </FormContainer>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default ChangeAccount;
