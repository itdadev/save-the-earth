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
import { MyPage } from "@/_auth/pages/user";
import { Header } from "@/components/shared/header";
import { AntdTheme } from "@/libs/antd/AntdCustomTheme";
import { Footer } from "@/components/shared/footer";
import { Donate } from "@/_root/pages/donate";
import { YoutubeCampaign } from "@/_root/pages/youtube-campaign";
import {
  CleanShore,
  Environment,
  Forest,
  LatestActivities,
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
import LatestActivityDetail from "./_root/pages/campaign-activity/detail/LatestActivityDetail";
import CampaignActivity from "@/_root/pages/campaign-activity/CampaignActivity";

const Container = styled.div(() => ({
  minHeight: "100svh",
}));

function App() {
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
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/find-account" element={<FindAccount />} />
                <Route
                  path="/find-account-fail"
                  element={<FindAccountFail />}
                />
                <Route path="/change-password" element={<ChangePassword />} />

                <Route path="/donate" element={<Donate />} />
                <Route path="/youtube-campaign" element={<YoutubeCampaign />} />
                <Route
                  path="/campaign/:campaignId"
                  element={<CampaignActivity />}
                />
                <Route path="/clean-shore" element={<CleanShore />} />
                <Route path="/forest" element={<Forest />} />
                <Route path="/environment" element={<Environment />} />
                <Route
                  path="/latest-activities"
                  element={<LatestActivities />}
                />
                <Route
                  path="/latest-activities/:activityId"
                  element={<LatestActivityDetail />}
                />
                <Route
                  path="/balanced-coexistence"
                  element={<BalancedCoexistence />}
                />
                <Route path="/take-action" element={<TakeAction />} />
                <Route
                  path="/declaration-establishment"
                  element={<DeclarationEstablishment />}
                />
                <Route path="/executives" element={<Executives />} />
                <Route path="/history" element={<History />} />
                <Route path="/media" element={<Media />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/account-report" element={<AccountReport />} />
                <Route path="/about-company" element={<AboutCompany />} />
                <Route
                  path="/environment-calendar"
                  element={<EnvironmentCalendar />}
                />
              </Route>

              {/* NOTE: 로그인해야 접근할 수 있는 페이지 */}
              <Route element={<AuthLayout />}>
                <Route path="/mypage" element={<MyPage />} />
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
