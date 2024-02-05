import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryProvider } from "@/lib/react-query/QueryProvider";

import App from "./App";
import GlobalStyles from "@/assets/styles/GlobalStyles";
import LibraryStyles from "@/assets/styles/LibraryStyles";
import { ScrollToTop } from "@/utils";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* NOTE: react query setting */}
    <QueryProvider>
      {/* NOTE: 페이지 이동시 맨 위로 이동 */}
      <ScrollToTop />

      {/* NOTE: Globally resetting CSS styles*/}
      <GlobalStyles />

      <LibraryStyles />

      {/* NOTE: react query dev tools */}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

      <App />
    </QueryProvider>
  </BrowserRouter>,
);
