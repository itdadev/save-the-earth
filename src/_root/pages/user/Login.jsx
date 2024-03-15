import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divider, Flex } from "antd";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { PrimaryButton } from "@/components/ui/buttons";
import { image } from "@/theme";
import { EmailField, PasswordField } from "@/components/ui/form/Fields";
import { SingleCheckBox } from "@/components/ui/form";
import { zodLogin } from "@/libs/zod/zodValidation";
import useUserStore from "@/store/useUserStore";

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
  const { setUser } = useUserStore();

  const navigate = useNavigate();

  const theme = useTheme();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(zodLogin),
    defaultValues: {
      user_email: sessionStorage?.getItem("stored_email")
        ? sessionStorage?.getItem("stored_email")
        : "",
      user_password: "",
      auto_login: !!sessionStorage?.getItem("stored_email"),
    },
  });

  const onSubmit = useCallback(
    data => {
      if (data?.auto_login) {
        sessionStorage.setItem("stored_email", data?.user_email);
      } else {
        sessionStorage.removeItem("stored_email");
      }

      setUser({
        id: 1,
        name: "유화경",
        email: "lilly@itdadev.com",
        phone: "01049555429",
      });

      navigate("/mypage");
    },
    [setUser, navigate],
  );

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>로그인</CommonTitleTwo>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <EmailField control={control} />

              <PasswordField control={control} />
            </div>

            <LoginUtilGroup justify="space-between">
              <SingleCheckBox
                name="auto_login"
                control={control}
                label="이메일 저장"
              />

              <Flex align="center" gap="8px">
                <Link to="/find-account">이메일 / 비밀번호 찾기</Link>

                <span>|</span>

                <Link to="/join">회원가입</Link>
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

          <Flex justify="space-between">
            <SnsLoginButton type="button">
              <img
                src={image.googleIcon.default}
                alt="구글 로고"
                width={24}
                height={24}
              />
              구글 로그인
            </SnsLoginButton>

            <SnsLoginButton type="button">
              <img
                src={image.kakaoIcon.default}
                alt="카카오 로고"
                width={24}
                height={24}
              />
              카카오 로그인
            </SnsLoginButton>
          </Flex>
        </FormContainer>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default Login;
