import React, { useCallback } from "react";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { Divider, Flex } from "antd";
import {
  PasswordConfirmField,
  PasswordField,
} from "@/components/ui/form/Fields";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { SnsLoginButton, SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { PrimaryButton } from "@/components/ui/buttons";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { image } from "@/theme";

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
  marginBottom: "3rem",
  padding: "2rem 0",
  textAlign: "center",
  background: theme.color.pink,
  fontSize: "2rem",
}));
const ChangePassword = () => {
  const LOGIN_METHOD = "kakao";

  const theme = useTheme();
  const navigate = useNavigate();

  const navigateToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      user_password: "",
      confirm_password: "",
    },
  });

  const onSubmit = useCallback(
    data => {
      if (data) {
        navigate("/login");
      }
    },
    [navigate],
  );

  return (
    <CommonPageContainer>
      <CommonContainer>
        <Wrapper vertical align="center" justify="center">
          <CommonTitleTwo>계정 찾기 완료</CommonTitleTwo>

          {LOGIN_METHOD === "email" ? (
            <div>
              <Description>
                입력하신 휴대폰 번호로 가입된 계정은 아래와 같습니다.
              </Description>

              <FoundEmail>lilly@itdadev.com</FoundEmail>
            </div>
          ) : LOGIN_METHOD === "kakao" ? (
            <Description>카카오로 가입된 계정입니다.</Description>
          ) : (
            ""
          )}

          {LOGIN_METHOD === "email" ? (
            <PrimaryButton
              bgColor={theme.color.grey05}
              clickEvent={navigateToLogin}
            >
              로그인하기
            </PrimaryButton>
          ) : LOGIN_METHOD === "kakao" ? (
            <SnsLoginButton type="button">
              <img
                src={image.kakaoIcon.default}
                alt="카카오 로고"
                width={24}
                height={24}
              />
              카카오 로그인
            </SnsLoginButton>
          ) : (
            <SnsLoginButton type="button">
              <img
                src={image.googleIcon.default}
                alt="구글 로고"
                width={24}
                height={24}
              />
              구글 로그인
            </SnsLoginButton>
          )}

          {LOGIN_METHOD === "email" && (
            <div>
              <Divider />

              <CommonTitleTwo>비밀번호 변경하기</CommonTitleTwo>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <PasswordField control={control} />

                <PasswordConfirmField control={control} />

                <SubmitButtonWrapper justify="center">
                  <PrimaryButton
                    bgColor={theme.color.secondary02}
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
