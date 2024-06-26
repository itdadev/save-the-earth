import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Divider, Flex, notification } from "antd";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { PrimaryButton } from "@/components/ui/buttons";
import { EmailField, PasswordField } from "@/components/ui/form/Fields";
import { SingleCheckBox } from "@/components/ui/form";
import { zodLogin } from "@/libs/zod/zodValidation";
import { useMutation } from "@tanstack/react-query";
import { USER_SIGN_IN_API_URL } from "@/constants/apiUrls";
import {
  DEACTIVATED_USER,
  INVALID_LOGIN_INFO,
  SUCCESS_CODE,
} from "@/constants/responseResults";
import { useUserLoggedIn } from "@/store/useLoginStore";
import { SnsLoginButtons } from "@/components/ui/buttons/SnsLoginButton";

export const FormContainer = styled.form(() => ({
  maxWidth: "50rem",
  margin: "0 auto",
}));

const LoginUtilGroup = styled(Flex)(() => ({
  fontSize: "1.4rem",
}));

export const SubmitButtonWrapper = styled(Flex)(() => ({
  marginTop: "5rem",
  marginBottom: "2.4rem",

  button: {
    width: "24rem",
  },
}));

export const SnsLoginButton = styled.button(({ theme }) => ({
  display: "flex",
  width: "24rem",
  height: "4.5rem",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  border: `1px solid ${theme.color.grey04}`,
  borderRadius: "5rem",
  transition: "all 0.3s",

  "&:hover": {
    "&:first-of-type": {
      borderColor: "#4285F4",
    },

    "&:last-of-type": {
      borderColor: "#FFE500",
    },
  },
}));

const Login = () => {
  const state = useLocation().state;

  const [snsData, setSnsData] = useState({
    kakao: {},
    google: {},
  });

  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const theme = useTheme();

  const { setLoggedIn } = useUserLoggedIn();

  const { control, setFocus, setError, handleSubmit } = useForm({
    resolver: zodResolver(zodLogin),
    defaultValues: {
      user_email: sessionStorage?.getItem("stored_email")
        ? sessionStorage?.getItem("stored_email")
        : "",
      user_password: "",
      auto_login: !!sessionStorage?.getItem("stored_email"),
      sns_key: "",
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
        if (error.response.data.data === "email") {
          setError("user_email", {
            message: "이메일 또는 비밀번호가 일치하지 않습니다.",
          });

          setFocus("user_email");
        }

        if (error.response.data.data === "kakao") {
          navigate("/join/kakao", { state: { userData: snsData.kakao } });
        }

        if (error.response.data.data === "google") {
          navigate("/join/google", { state: { userData: snsData.google } });
        }
      }

      if (error.response.data.code === DEACTIVATED_USER) {
        // CASE: Deactivated user
      }
    },
  });

  useEffect(() => {
    if (state?.joinSuccess) {
      api.success({
        message: `회원가입 완료되었습니다.`,
        description: "세이브더얼스 회원이 되신 걸 환영합니다.",
      });
    }

    if (state?.changePasswordSuccess || state?.resetPasswordSuccess) {
      api.success({
        message: `비밀번호 변경이 완료되었습니다.`,
        description: "변경하신 비밀번호로 다시 로그인해주세요.",
      });
    }
  }, []);

  useEffect(() => {
    // 새로고침시 state 초기화
    window.history.replaceState({}, document.title);
  }, []);

  // NOTE: 이메일 로그인
  const onSubmit = useCallback(
    data => {
      if (data?.auto_login) {
        sessionStorage.setItem("stored_email", data?.user_email);
      } else {
        sessionStorage.removeItem("stored_email");
      }

      const modifiedData = { ...data, login_type: "email" };

      signInUser(modifiedData);
    },
    [signInUser],
  );

  return (
    <CommonPageContainer>
      <CommonContainer>
        {contextHolder}

        <CommonTitleTwo>로그인</CommonTitleTwo>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <EmailField control={control} />

              <PasswordField control={control} />
            </div>

            <LoginUtilGroup justify="space-between" wrap="wrap" gap="1rem 0">
              <SingleCheckBox
                name="auto_login"
                control={control}
                label="이메일 저장"
              />

              <Flex align="center" gap="8px">
                <Link to="/find-account">이메일 / 비밀번호 찾기</Link>

                <span>|</span>

                <Link to="/join/email">회원가입</Link>
              </Flex>
            </LoginUtilGroup>
          </div>

          <SubmitButtonWrapper justify="center">
            <PrimaryButton
              bgColor={theme.color.secondary02}
              buttonType="submit"
            >
              로그인
            </PrimaryButton>
          </SubmitButtonWrapper>

          <Divider />

          <SnsLoginButtons setSnsData={setSnsData} signInUser={signInUser} />
        </FormContainer>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default Login;
