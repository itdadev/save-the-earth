import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import AppTheme from "@/theme";
import styled from "@emotion/styled";
import { ConfigProvider } from "antd";

// slick slider style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AuthLayout from "@/_auth/AuthLayout";

import RootLayout from "@/_root/RootLayout";
import NotFound from "@/_root/pages/NotFound";

import { Home } from "@/_root/pages/home";
import {
  ChangePassword,
  FindAccount,
  FindAccountFail,
  Join,
  Login,
} from "@/_root/pages/user";
import { ChangeAccount, ChangeMyPassword, MyPage } from "@/_auth/pages/user";
import { Header } from "@/components/shared/header";
import { AntdTheme } from "@/libs/antd/AntdCustomTheme";
import { Footer } from "@/components/shared/footer";
import { Donate } from "@/_root/pages/donate";
import { YoutubeCampaign } from "@/_root/pages/youtube-campaign";
import {
  CampaignDetail,
  LatestActivities,
  LatestActivityDetail,
} from "@/_root/pages/campaign-activity";
import { BalancedCoexistence, TakeAction } from "@/_root/pages/core-value";
import {
  AboutCompany,
  AccountReport,
  DeclarationEstablishment,
  Executives,
  History,
  Media,
  PrivacyPolicy,
  TermsOfUse,
} from "@/_root/pages/corporation";
import { EnvironmentCalendar } from "@/_root/pages/environment-calendar";
import { useEffect } from "react";
import AuthAfterLayout from "@/_auth/AuthAfterLayout";
import { useUserLoggedIn } from "@/store/useLoginStore";
import { OurMember, OurMemberDetail } from "@/_root/pages/our-member";

const Container = styled.div(() => ({
  minHeight: "100svh",
}));

function App() {
  const isAuthenticated = localStorage.getItem("tokens");
  const { setLoggedIn } = useUserLoggedIn();

  useEffect(() => {
    if (isAuthenticated) {
      setLoggedIn();
    }
  }, []);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <ThemeProvider theme={AppTheme}>
      <ConfigProvider theme={AntdTheme}>
        <Container>
          <Header />

          <div>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* NOTE: 로그인없이 접근할 수 있는 페이지 */}
              <Route element={<RootLayout />}>
                {/* 로그인 + 회원가입 관련 */}
                <Route path="/join/:loginType" element={<Join />} />
                <Route path="/find-account" element={<FindAccount />} />
                <Route
                  path="/find-account-fail"
                  element={<FindAccountFail />}
                />
                <Route path="/change-password" element={<ChangePassword />} />

                <Route path="/donate" element={<Donate />} />
                <Route path="/youtube-campaign" element={<YoutubeCampaign />} />

                <Route
                  path="/campaign/:campaignName/:campaignId"
                  element={<CampaignDetail />}
                />

                <Route
                  path="/latest-activities"
                  element={<LatestActivities />}
                />
                <Route
                  path="/latest-activities/:activityName/:activityId"
                  element={<LatestActivityDetail />}
                />

                <Route path="/our-member" element={<OurMember />} />

                <Route
                  path="/our-member/:memberName/:memberId"
                  element={<OurMemberDetail />}
                />

                <Route
                  path="/core-values/균형있는-공존"
                  element={<BalancedCoexistence />}
                />
                <Route
                  path="/core-values/작은-행동-실천"
                  element={<TakeAction />}
                />
                <Route
                  path="/incorporated-association/설립선언문"
                  element={<DeclarationEstablishment />}
                />
                <Route
                  path="/incorporated-association/임원진"
                  element={<Executives />}
                />
                <Route
                  path="/incorporated-association/연혁-및-주요활동"
                  element={<History />}
                />
                <Route
                  path="/incorporated-association/미디어"
                  element={<Media />}
                />
                <Route
                  path="/incorporated-association/이용약관"
                  element={<TermsOfUse />}
                />
                <Route
                  path="/incorporated-association/개인정보취급방침"
                  element={<PrivacyPolicy />}
                />
                <Route
                  path="/incorporated-association/정관-회계보고서"
                  element={<AccountReport />}
                />
                <Route
                  path="/incorporated-association/회사소개"
                  element={<AboutCompany />}
                />
                <Route
                  path="/environment-calendar"
                  element={<EnvironmentCalendar />}
                />
              </Route>

              {/* NOTE: 로그인한 후에는 접근할 수 없는 페이지 */}
              <Route element={<AuthAfterLayout />}>
                <Route path="/login" element={<Login />} />
              </Route>

              {/* NOTE: 로그인해야 접근할 수 있는 페이지 */}
              <Route element={<AuthLayout />}>
                <Route path="/mypage" element={<MyPage />} />
                <Route
                  path="/change-my-password"
                  element={<ChangeMyPassword />}
                />
                <Route path="/change-account" element={<ChangeAccount />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </Container>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
