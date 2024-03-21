import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { notification } from "antd";

import { useUserStore } from "@/store/useUserStore";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import styled from "@emotion/styled";
import { SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { PrimaryButton } from "@/components/ui/buttons";
import { color } from "@/theme";
import {
  changeBirthFormat,
  changePhoneFormat,
  translateLoginType,
} from "@/utils/Functions";

const Wrapper = styled.div(() => ({
  maxWidth: "50rem",
  margin: "4.8rem auto 0",
}));

const Item = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "2rem",
  marginBottom: "1rem",
  paddingBottom: "1rem",

  "&:not(:last-of-type)": {
    borderBottom: `1px solid ${theme.color.grey03}`,
  },
}));

const MyPage = () => {
  const state = useLocation().state;

  const { user } = useUserStore();
  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();

  const mypageInfo = [
    {
      id: 1,
      title: "로그인 유형",
      data: `${translateLoginType(user?.login_type)} 로그인`,
    },
    {
      id: 2,
      title: "이름",
      data: user?.user_name,
    },
    { id: 3, title: "이메일", data: user?.user_email },
    { id: 4, title: "휴대폰 번호", data: changePhoneFormat(user?.user_phone) },
    { id: 5, title: "생년월일", data: changeBirthFormat(user?.user_birth) },
    {
      id: 6,
      title: "이메일 수신동의",
      data: user?.email_receive_yn === 0 ? "미동의" : "동의",
    },
  ];

  const editNavigate = useCallback(
    link => {
      navigate(link);
    },
    [navigate],
  );

  useEffect(() => {
    if (state?.changeAccountSuccess) {
      api.success({
        message: `계정 정보 수정이 완료되었습니다.`,
      });
    }
  }, []);

  useEffect(() => {
    // 새로고침시 state 초기화
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <CommonPageContainer>
      <CommonContainer>
        {contextHolder}

        <CommonTitleTwo>마이페이지</CommonTitleTwo>

        <Wrapper>
          <div>
            {mypageInfo?.map(info => {
              return (
                <Item key={info.id}>
                  <div>{info.title}</div>

                  <div>{info.data}</div>
                </Item>
              );
            })}
          </div>

          <SubmitButtonWrapper align="center" justify="center" gap="1rem">
            <PrimaryButton
              bgColor={color.grey05}
              clickEvent={() => editNavigate("/change-my-password")}
            >
              비밀번호 변경
            </PrimaryButton>

            {/* NOTE: 로그인 타입이 이메일일 경우만 정보 수정 가능 */}
            {user?.login_type === "email" && (
              <PrimaryButton
                bgColor={color.grey05}
                clickEvent={() => editNavigate("/change-account")}
              >
                정보 수정
              </PrimaryButton>
            )}
          </SubmitButtonWrapper>
        </Wrapper>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default MyPage;
