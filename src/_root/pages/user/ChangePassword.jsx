import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Divider, Flex } from "antd";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import axios from "axios";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import {
  NewPasswordField,
  PasswordConfirmField,
} from "@/components/ui/form/Fields";
import { PrimaryButton } from "@/components/ui/buttons";
import { color, image } from "@/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodChangePassword } from "@/libs/zod/zodValidation";
import { SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { translateLoginType } from "@/utils/Functions";
import { useMutation } from "@tanstack/react-query";
import {
  RESET_PASSWORD_API_URL,
  USER_SIGN_IN_API_URL,
} from "@/constants/apiUrls";
import { INVALID_LOGIN_INFO, SUCCESS_CODE } from "@/constants/responseResults";
import {
  GoogleLoginButton,
  KakaoLoginButton,
  SnsLoginButtons,
} from "@/components/ui/buttons/SnsLoginButton";
import { useUserLoggedIn } from "@/store/useLoginStore";

const Wrapper = styled(Flex)(() => ({
  maxWidth: "50rem",
  margin: "0 auto",
}));

const Form = styled.form(() => ({
  width: "100%",
}));

const Description = styled.p(() => ({
  margin: "2rem 0",
  fontSize: "2rem",
}));

const FoundEmail = styled.div(({ theme }) => ({
  width: "100%",
  margin: "1rem 0 3rem",
  padding: "2rem 0",
  textAlign: "center",
  background: theme.color.pink,
  fontSize: "2rem",
}));
const ChangePassword = () => {
  const [snsData, setSnsData] = useState({
    kakao: {},
    google: {},
  });

  const state = useLocation().state;
  const { setLoggedIn } = useUserLoggedIn();

  const LOGIN_METHOD = state.userData.login_type;
  const EMAIL = state.userData.user_email;

  const navigate = useNavigate();

  const navigateToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(zodChangePassword),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const { mutate: signInUser } = useMutation({
    mutationFn: async data => {
      return await axios.post(USER_SIGN_IN_API_URL, data);
    },
    onSuccess: data => {
      if (data?.data?.code === SUCCESS_CODE) {
        localStorage.setItem("tokens", JSON.stringify(data?.data.data));

        setLoggedIn();

        navigate("/");
      }
    },
    onError: error => {
      if (error.response.data.code === INVALID_LOGIN_INFO) {
        if (error.response.data.data === "kakao") {
          navigate("/join/kakao", { state: { userData: snsData.kakao } });
        }

        if (error.response.data.data === "google") {
          navigate("/join/google", { state: { userData: snsData.google } });
        }
      }
    },
  });

  const { mutate: resetPassword } = useMutation({
    mutationFn: async data => {
      return await axios.patch(RESET_PASSWORD_API_URL, {
        user_email: EMAIL,
        new_password: data.new_password,
      });
    },
    onSuccess: data => {
      if (data?.data?.code === SUCCESS_CODE) {
        navigate("/login", { state: { resetPasswordSuccess: true } });
      }
    },
  });

  const onSubmit = useCallback(
    data => {
      resetPassword(data);
    },
    [resetPassword],
  );

  return (
    <CommonPageContainer>
      <CommonContainer>
        <Wrapper vertical align="center" justify="center">
          <CommonTitleTwo>계정 찾기 완료</CommonTitleTwo>

          {LOGIN_METHOD === "email" ? (
            <div>
              <Description>
                입력하신 핸드폰 번호로 가입된 계정은 아래와 같습니다.
              </Description>

              <p>로그인 타입: {translateLoginType(LOGIN_METHOD)}</p>

              <FoundEmail>{EMAIL}</FoundEmail>
            </div>
          ) : LOGIN_METHOD === "kakao" ? (
            <Description>카카오로 가입된 계정입니다.</Description>
          ) : (
            <Description>구글로 가입된 계정입니다.</Description>
          )}

          {LOGIN_METHOD === "email" ? (
            <PrimaryButton bgColor={color.grey05} clickEvent={navigateToLogin}>
              로그인하기
            </PrimaryButton>
          ) : LOGIN_METHOD === "kakao" ? (
            <KakaoLoginButton setSnsData={setSnsData} signInUser={signInUser} />
          ) : (
            <GoogleLoginButton
              setSnsData={setSnsData}
              signInUser={signInUser}
            />
          )}

          {LOGIN_METHOD === "email" && (
            <div>
              <Divider />

              <CommonTitleTwo>비밀번호 변경하기</CommonTitleTwo>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <NewPasswordField control={control} />

                <PasswordConfirmField control={control} />

                <SubmitButtonWrapper justify="center">
                  <PrimaryButton
                    bgColor={color.secondary02}
                    buttonType="submit"
                  >
                    변경하기
                  </PrimaryButton>
                </SubmitButtonWrapper>
              </Form>
            </div>
          )}
        </Wrapper>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default ChangePassword;
