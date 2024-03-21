import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useUserStore } from "@/store/useUserStore";
import { useLogoutUser } from "@/hooks/useAuth";

const UtilMenuList = styled.div(() => ({
  fontSize: "1.6rem",

  "& a:not(:last-of-type)": {
    borderRight: "1px solid black",
    paddingRight: "1.2rem",
    marginRight: "1.2rem",
  },
}));
const UtilMenu = ({ utilMenu }) => {
  const { user } = useUserStore();

  const logoutUser = useLogoutUser();

  return (
    <UtilMenuList>
      {utilMenu
        .filter(el => !el.outerLink)
        .map(util => {
          return (
            <Link to={util.url} key={util.id}>
              {util.title}
            </Link>
          );
        })}

      {user && (
        <Link to="/" onClick={logoutUser}>
          로그아웃
        </Link>
      )}

      {utilMenu
        .filter(el => el.outerLink)
        .map(util => {
          return (
            <a
              href={util.outerLink}
              target="_blank"
              rel="noreferrer"
              key={util.id}
            >
              {util.title}
            </a>
          );
        })}
    </UtilMenuList>
  );
};

export default UtilMenu;
