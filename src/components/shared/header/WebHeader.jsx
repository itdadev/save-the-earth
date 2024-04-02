import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { image } from "@/theme";
import styled from "@emotion/styled";
import { Flex, Image } from "antd";

import { HEADER_MENU_Z_INDEX } from "@/constants/zIndex";
import { ProjectList } from "@/components/shared/item";
import { UtilMenu } from "@/components/shared/header/index";

const Container = styled(Flex)(() => ({
  position: "fixed",
  top: 0,
  fontSize: "1.8rem",
  width: "100%",
  zIndex: HEADER_MENU_Z_INDEX,
  background: "white",
  boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.2)",
}));

const UtilMenuWrapper = styled(Flex)(() => ({
  position: "relative",
  width: "100%",
  padding: "0 10rem",
  height: "7.6rem",
  background: "white",
}));

const MainMenuWrapper = styled(Flex)(({ theme }) => ({
  position: "relative",
  background: theme.color.primary01,
  height: "7rem",
  paddingLeft: "10rem",
  color: "white",
  fontSize: "2rem",
  zIndex: HEADER_MENU_Z_INDEX,
}));

const MainMenuItem = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  flex: 1,
  width: "100%",
  minWidth: "16rem",
  height: "100%",
}));

const SubMenuWrapper = styled(Flex)(({ open }) => ({
  position: "absolute",
  width: "100%",
  left: "0",
  top: open ? "14.6rem" : "-100vh",
  zIndex: -1,
  paddingLeft: "10rem",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  transition: "all 0.6s",
}));

const DonateButton = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.color.tertiary,
  height: "100%",
  width: "36rem",
  gap: "0 0.6rem",
  padding: "0 2rem",
  fontWeight: theme.fontWeight.bold,

  "&:hover": {
    color: "white",
  },
}));

const SubMenuList = styled.nav(({ theme }) => ({
  flex: 1,
  width: "100%",
  minWidth: "16rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem 0",
  padding: "2.4rem 0",
  color: theme.color.black01,
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  fontSize: "1.8rem",
}));

const ProjectWrapper = styled(Flex)(() => ({
  width: "36rem",
  padding: "0 2.4rem",
  // background: "rgba(247, 216, 226, 0.8)",
}));

const WebHeader = ({ menuTree, utilMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showHeaderHandler = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const hideHeaderHandler = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <Container vertical>
      <UtilMenuWrapper align="center" justify="space-between">
        <Link to="/">
          <img src={image.headerLogo.default} alt="Save the Earth" />
        </Link>

        <UtilMenu utilMenu={utilMenu} />
      </UtilMenuWrapper>

      <MainMenuWrapper align="center" justify="space-between" gap="1rem">
        {menuTree?.map(menu => {
          return (
            <MainMenuItem
              to={menu.url}
              key={menu.id}
              onMouseEnter={showHeaderHandler}
              onMouseLeave={hideHeaderHandler}
            >
              {menu.title}
            </MainMenuItem>
          );
        })}

        <DonateButton
          to="/donate"
          onMouseEnter={showHeaderHandler}
          onMouseLeave={hideHeaderHandler}
        >
          <img
            src={image.heartIcon.default}
            alt="하트 아이콘"
            width={35}
            height={35}
          />

          <div>후원하기</div>
        </DonateButton>
      </MainMenuWrapper>

      <SubMenuWrapper
        justify="space-between"
        open={menuOpen}
        onMouseEnter={showHeaderHandler}
        onMouseLeave={hideHeaderHandler}
      >
        {menuTree?.map(menu => {
          return (
            <Flex align="flex-start" justify="space-between" key={menu.id}>
              {menu.subMenus ? (
                <SubMenuList>
                  {menu.subMenus.map(link => {
                    return (
                      <Link to={link.url} key={link.id}>
                        {link.title}
                      </Link>
                    );
                  })}
                </SubMenuList>
              ) : (
                <SubMenuList></SubMenuList>
              )}
            </Flex>
          );
        })}

        <ProjectWrapper align="center" justify="space-between">
          <ProjectList hide />
        </ProjectWrapper>
      </SubMenuWrapper>
    </Container>
  );
};

export default WebHeader;
