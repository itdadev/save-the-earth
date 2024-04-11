import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodChangeAccount } from "@/libs/zod/zodValidation";
import { useUserStore } from "@/store/useUserStore";
import { useMutation } from "@tanstack/react-query";
import Interceptor from "@/libs/axios/AxiosInterceptor";

import { color } from "@/theme";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { BirthField, EmailField, NameField } from "@/components/ui/form/Fields";
import { PhoneVerificationFields, SingleCheckBox } from "@/components/ui/form";
import { USER_API_URL } from "@/constants/apiUrls";
import { SUCCESS_CODE } from "@/constants/responseResults";
import { LOCAL_STORAGE_TOKENS } from "@/constants/storageKey";
import { PrimaryButton } from "@/components/ui/buttons";
import {
  changeBirthFormat,
  changePhoneFormat,
  replaceAllDash,
} from "@/utils/Functions";
import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { NameBirthContainer } from "@/_root/pages/user/Join";

const ChangeAccount = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const [phoneChanged, setPhoneChanged] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    resetField,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodChangeAccount),
    defaultValues: {
      user_email: user?.user_email,
      user_birth: "",
      user_name: "",
      user_phone: "",
      phone_verified: false,
      auth_code: "",
      email_receive_yn: false,
      phone_changed: phoneChanged,
    },
  });

  useEffect(() => {
    if (user) {
      setValue("user_email", user.user_email);
      setValue("user_name", user.user_name);
      setValue("user_phone", changePhoneFormat(user.user_phone));
      setValue("user_birth", changeBirthFormat(user.user_birth));
      setValue("email_receive_yn", user.email_receive_yn === 1);
    }
  }, [user]);

  const { mutate: updateUserAccount } = useMutation({
    mutationFn: async data => {
      return await Interceptor.patch(USER_API_URL, {
        ...data,
        user_birth: replaceAllDash(data?.user_birth),
        user_phone: replaceAllDash(data?.user_phone),
      });
    },
    onSuccess: data => {
      const refreshToken = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_TOKENS),
      ).refresh_token;

      const newToken = JSON.stringify({
        access_token: data?.data.data.access_token,
        refresh_token: refreshToken,
      });

      localStorage.setItem(LOCAL_STORAGE_TOKENS, newToken);

      if (data?.data.code === SUCCESS_CODE) {
        navigate("/mypage", { state: { changeAccountSuccess: true } });
      }
    },
    onError: error => {
      console.log(error);
    },
  });

  useEffect(() => {
    const subscription = watch(value => {
      if (value.user_phone !== changePhoneFormat(user.user_phone)) {
        setPhoneChanged(true);
      } else {
        setPhoneChanged(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [setValue, user, watch]);

  useEffect(() => {
    if (phoneChanged) {
      setValue("phone_changed", true);
    } else {
      setValue("phone_changed", false);
    }
  }, [phoneChanged, setValue]);

  const onSubmit = useCallback(
    async data => {
      setUser({
        ...data,
        email_receive_yn: data?.email_receive_yn ? 1 : 0,
        user_email: user?.user_email,
        login_type: user?.login_type,
      });

      updateUserAccount({ ...data, phone_changed: phoneChanged });
    },
    [
      setUser,
      updateUserAccount,
      phoneChanged,
      user?.user_email,
      user?.login_type,
    ],
  );

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
                name="email_receive_yn"
                control={control}
                label="이메일 수신동의"
              />
            </div>
          </div>

          <SubmitButtonWrapper justify="center">
            <PrimaryButton bgColor={color.secondary02} buttonType="submit">
              수정하기
            </PrimaryButton>
          </SubmitButtonWrapper>
        </FormContainer>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default ChangeAccount;
