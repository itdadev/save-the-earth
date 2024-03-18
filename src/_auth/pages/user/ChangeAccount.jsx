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
import { PhoneVerificationFields } from "@/components/ui/form";
import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { PrimaryButton } from "@/components/ui/buttons";
import { NameBirthContainer } from "@/_root/pages/user/Join";

const ChangeAccount = () => {
  const { user } = useUserStore();

  console.log(user);

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
      setValue("user_phone", user.phone);
      setValue("user_birth", user.birth);
    }
  }, [user]);

  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

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
