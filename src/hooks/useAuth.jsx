import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@/store/useUserStore";
import { USER_DATA_QUERY_KEY } from "@/constants/queryKeys";

export const useSignInUser = data => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tokens", data);

    navigate("/mypage");
  }, []);

  return {};
};

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  return useCallback(() => {
    queryClient.removeQueries(USER_DATA_QUERY_KEY);

    setUser(null);

    localStorage.removeItem("tokens");

    navigate("/login");
  }, [queryClient, setUser, navigate]);
};
