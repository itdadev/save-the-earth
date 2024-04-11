import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

import { REFRESH_TOKEN_API_URL } from "@/constants/apiUrls";
import { useQueryClient } from "@tanstack/react-query";
import { LOCAL_STORAGE_TOKENS } from "@/constants/storageKey";
import { USER_DATA_QUERY_KEY } from "@/constants/queryKeys";

export function LogoutUser() {
  const queryClient = useQueryClient();

  queryClient.removeQueries(USER_DATA_QUERY_KEY);

  localStorage.removeItem(LOCAL_STORAGE_TOKENS);
}

const useRefreshToken = async config => {
  const refreshToken = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_TOKENS),
  ).refresh_token;

  let token = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_TOKENS),
  ).access_token;

  const expireAt = jwtDecode(token);

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (dayjs.unix(expireAt.exp).diff(dayjs()) < 1) {
    try {
      const res = await axios.post(REFRESH_TOKEN_API_URL, {
        refresh_token: refreshToken,
      });

      if (res.status === 400) {
        console.log("refresh token is not stored");

        LogoutUser();

        return;
      }

      token = res.data.data.access_token;

      localStorage.setItem(
        LOCAL_STORAGE_TOKENS,
        JSON.stringify({
          refresh_token: refreshToken,
          access_token: token,
        }),
      );
    } catch (error) {
      console.log(error);

      localStorage.removeItem(LOCAL_STORAGE_TOKENS);

      window.location.reload();
    }

    // 토큰 갱신 서버통신
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

const useRefreshErrorHandle = err => {
  console.log(err);

  // TODO: logout
};

export { useRefreshToken, useRefreshErrorHandle };
