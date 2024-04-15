import React, { useCallback } from "react";
import { color } from "@/theme";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormContainer, SubmitButtonWrapper } from "@/_root/pages/user/Login";
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
import { CHANGE_PASSWORD_API_URL } from "@/constants/apiUrls";
import { INVALID_PASSWORD, SUCCESS_CODE } from "@/constants/responseResults";
import Interceptor from "@/libs/axios/AxiosInterceptor";
import { zodChangeMyPassword } from "@/libs/zod/zodValidation";
import { CURRENT_PASSWORD_INVALID } from "@/constants/inputErrorMessage";
import { useNavigate } from "react-router-dom";
import { USER_DATA_QUERY_KEY } from "@/constants/queryKeys";
import { useUserStore } from "@/store/useUserStore";

const ChangeMyPassword = () => {
  const queryClient = useQueryClient();
  const { setUser } = useUserStore();

  const navigate = useNavigate();

  const { control, handleSubmit, setError, setFocus } = useForm({
    resolver: zodResolver(zodChangeMyPassword),
    defaultValues: {
      user_password: "",
      confirm_password: "",
      new_password: "",
    },
  });

  // NOTE: 비밀번호 변경
  const { mutate: changeMyPassword } = useMutation({
    mutationFn: async data => {
      return await Interceptor.patch(CHANGE_PASSWORD_API_URL, data);
    },
    onSuccess: data => {
      if (data?.data.code === SUCCESS_CODE) {
        navigate("/login", { state: { resetPasswordSuccess: true } });
        queryClient.removeQueries(USER_DATA_QUERY_KEY);

        setUser(null);

        localStorage.removeItem("tokens");
      }
    },
    onError: error => {
      if (error.response.data.code === INVALID_PASSWORD) {
        setError("user_password", { message: CURRENT_PASSWORD_INVALID });

        setFocus("user_password");
      }
    },
  });

  const onSubmit = useCallback(
    data => {
      changeMyPassword(data);
    },
    [changeMyPassword],
  );

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
