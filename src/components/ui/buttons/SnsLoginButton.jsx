import React, { useCallback } from "react";
import { image } from "@/theme";
import styled from "@emotion/styled";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { Flex } from "antd";
import KakaoLogin from "react-kakao-login";
import { SnsLoginButton } from "@/_root/pages/user/Login";

const StyledButton = styled.button(({ theme }) => ({
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

export const GoogleLoginButton = ({ setSnsData, signInUser }) => {
  // NOTE: 구글 로그인
  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse?.access_token}`,
            },
          },
        );

        if (res.status === 200) {
          const modifiedData = {
            login_type: "google",
            user_email: res.data.email,
            sns_key: res.data.id,
          };

          setSnsData(prev => ({ ...prev, google: res.data }));

          signInUser(modifiedData);
        }
      } catch (error) {
        console.log(error);
      }
    },
    redirect_uri: "http://localhost:3000/mypage",
  });

  return (
    <StyledButton type="button" onClick={googleLogin}>
      <img
        src={image.googleIcon.default}
        alt="구글 로고"
        width={24}
        height={24}
      />
      구글 로그인
    </StyledButton>
  );
};

export const KakaoLoginButton = ({ setSnsData, signInUser }) => {
  // NOTE: 카카오 로그인 (Success)
  const kakaoOnSuccess = useCallback(
    async data => {
      try {
        // 전달받은 access token으로 회원 정보 요청 (이메일, 이름, 전화번호, 생년월일)
        const res = await axios.get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: `Bearer ${data?.response.access_token}`,
          },
        });

        if (res.status === 200) {
          // 카카오 이메일로 로그인 요청
          const modifiedData = {
            login_type: "kakao",
            user_email: res?.data.kakao_account.email,
            sns_key: String(res?.data.id),
          };

          setSnsData(prev => ({
            ...prev,
            kakao: { ...res?.data.kakao_account, id: res?.data.id },
          }));

          signInUser(modifiedData);
        }
      } catch (e) {}
    },
    [signInUser, setSnsData],
  );

  // NOTE: 카카오 로그인 (Failure)
  const kakaoOnFailure = useCallback(error => {
    console.log(error);
  }, []);

  return (
    <KakaoLogin
      token={process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}
      onSuccess={kakaoOnSuccess}
      onFail={kakaoOnFailure}
      render={({ onClick }) => (
        <SnsLoginButton type="button" onClick={onClick}>
          <img
            src={image.kakaoIcon.default}
            alt="카카오 로고"
            width={24}
            height={24}
          />
          카카오 로그인
        </SnsLoginButton>
      )}
    />
  );
};

export const SnsLoginButtons = ({ setSnsData, signInUser }) => {
  return (
    <Flex justify="center" wrap="wrap" gap="1rem 2rem">
      <GoogleLoginButton setSnsData={setSnsData} signInUser={signInUser} />

      <KakaoLoginButton setSnsData={setSnsData} signInUser={signInUser} />
    </Flex>
  );
};
