import React, { useCallback } from "react";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { PhoneVerificationFields } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "@/components/ui/buttons";
import { useTheme } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodFindAccount } from "@/libs/zod/zodValidation";
import { useMutation } from "@tanstack/react-query";
import { FIND_USER_ACCOUNT_API_URL } from "@/constants/apiUrls";
import axios from "axios";
import { NO_SUCH_USER, SUCCESS_CODE } from "@/constants/responseResults";
import { PHONE_DOESNT_EXISTS } from "@/constants/inputErrorMessage";
import { replaceAllDash } from "@/utils/Functions";
import { useNavigate } from "react-router-dom";

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
      user_phone: "",
      auth_code: "",
      phone_verified: false,
    },
  });

  const { mutate: findAccount } = useMutation({
    mutationFn: async data => {
      return await axios.get(
        `${FIND_USER_ACCOUNT_API_URL}?user_phone=${replaceAllDash(data.user_phone)}`,
      );
    },
    onSuccess: data => {
      if (data?.data.code === SUCCESS_CODE) {
        navigate("/change-password", {
          state: { userData: data?.data.data },
        });
      }
    },
    onError: error => {
      console.log(error);

      if (error.response.data.code === NO_SUCH_USER) {
        setError("user_phone", { message: PHONE_DOESNT_EXISTS });
      }
    },
  });

  const onSubmit = useCallback(data => {
    findAccount(data);
  }, []);

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>계정 찾기</CommonTitleTwo>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <PhoneVerificationFields
            control={control}
            clearErrors={clearErrors}
            setError={setError}
            resetField={resetField}
            setValue={setValue}
            watch={watch}
            errors={errors}
            findAccount
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
