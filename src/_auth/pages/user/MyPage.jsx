import React, { useCallback } from "react";
import useUserStore from "@/store/useUserStore";
import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import styled from "@emotion/styled";
import { SubmitButtonWrapper } from "@/_root/pages/user/Login";
import { PrimaryButton } from "@/components/ui/buttons";
import { color } from "@/theme";
import { useNavigate } from "react-router-dom";
import { changeBirthFormat, changePhoneFormat } from "@/utils/Functions";

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
  const navigate = useNavigate();
  const { user } = useUserStore();

  const mypageInfo = [
    { id: 1, title: "로그인 유형", data: "카카오 로그인", icon: "" },
    {
      id: 2,
      title: "이름",
      data: user?.name,
    },
    { id: 3, title: "이메일", data: user?.email },
    { id: 4, title: "휴대폰 번호", data: changePhoneFormat(user?.phone) },
    { id: 5, title: "생년월일", data: changeBirthFormat(user?.birth) },
    {
      id: 6,
      title: "이메일 수신동의",
      data: user?.emailSend ? "O" : "X",
    },
  ];

  const editNavigate = useCallback(
    link => {
      navigate(link);
    },
    [navigate],
  );

  return (
    <CommonPageContainer>
      <CommonContainer>
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

            <PrimaryButton
              bgColor={color.grey05}
              clickEvent={() => editNavigate("/change-account")}
            >
              정보 수정
            </PrimaryButton>
          </SubmitButtonWrapper>
        </Wrapper>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default MyPage;
