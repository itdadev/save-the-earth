import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { QueryProvider } from "@/libs/react-query/QueryProvider";

import App from "./App";
import GlobalStyles from "@/assets/styles/GlobalStyles";
import LibraryStyles from "@/assets/styles/LibraryStyles";
import { ScrollToTop } from "@/utils";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* NOTE: react query setting */}
    <QueryProvider>
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
      >
        {/* NOTE: 페이지 이동시 맨 위로 이동 */}
        <ScrollToTop />
        {/* NOTE: Globally resetting CSS styles*/}
        <GlobalStyles />
        <LibraryStyles />
        {/* NOTE: react query dev tools */}
        <ReactQueryDevtools />
        <App />
      </GoogleOAuthProvider>
    </QueryProvider>
  </BrowserRouter>,
);
