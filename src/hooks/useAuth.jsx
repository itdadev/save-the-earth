import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useSignInUser = data => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tokens", data);

    navigate("/mypage");
  }, []);

  return {};
};
