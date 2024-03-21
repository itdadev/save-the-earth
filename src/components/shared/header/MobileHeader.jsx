import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { image } from "@/theme";
import { Flex } from "antd";

import {
  HEADER_MENU_Z_INDEX,
  HEADER_SUB_MENU_Z_INDEX,
} from "@/constants/zIndex";
import { UtilMenu } from "@/components/shared/header/index";

const Container = styled.div(() => ({}));

const ButtonWrapper = styled(Flex)(() => ({
  position: "fixed",
  top: 0,
  width: "100%",
  maxWidth: "100svw",
  height: "4.8rem",
  padding: "0 1.6rem",
  zIndex: HEADER_SUB_MENU_Z_INDEX,
  background: "white",
  boxShadow: `0 0.2rem 0.5rem rgba(0,0,0,0.2)`,
}));

const MenuAllWrapper = styled.div(({ open }) => ({
  position: "fixed",
  width: "100%",
  height: "100svh",
  maxHeight: "100svh",
  overflowY: "auto",
  zIndex: HEADER_MENU_Z_INDEX,
  left: open ? 0 : "-100%",
  transition: "all 0.6s",
  background: "white",
}));

const UtilMenuWrapper = styled(Flex)(({ theme }) => ({
  background: theme.color.primary01,
  padding: "2rem 3rem",
}));

const UtilMenuList = styled.div(() => ({
  fontSize: "1.6rem",

  "& a:not(:last-of-type)": {
    borderRight: "1px solid black",
    paddingRight: "1.2rem",
    marginRight: "1.2rem",
  },
}));

const DonateButton = styled(Link)(({ theme }) => ({
  color: theme.color.secondary01,
  fontWeight: theme.fontWeight.bold,
}));

const MainMenuWrapper = styled.div(() => ({
  background: "white",
}));

const LinkButton = styled(Flex)(({ theme, open }) => ({
  padding: "2rem 3rem",
  borderBottom: `1px solid ${theme.color.grey03}`,
  fontSize: "2.2rem",
  color: open ? "red" : "black",
  cursor: "pointer",
}));

const SubMenuWrapper = styled.div(({ theme, open }) => ({
  fontSize: "1.7rem",
  color: theme.color.grey01,
  background: theme.color.peach,
  height: open ? "100%" : 0,
  overflow: "hidden",
}));

const SubMenuList = styled(Flex)(() => ({
  gap: "2rem 0",
  padding: "2rem 3rem",
}));

const Button = styled.button(() => ({
  height: "2.2rem",
}));

const MobileHeader = ({ menuTree, utilMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const showHeaderHandler = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const hideHeaderHandler = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleSubmenuHandler = useCallback(
    idx => {
      if (openSubMenu[idx]) {
        setOpenSubMenu({ [idx]: false });
      } else {
        setOpenSubMenu({ [idx]: true });
      }
    },
    [openSubMenu],
  );

  useEffect(() => {
    if (menuOpen) {
      document.body.style.cssText = `
      overflow-y: hidden;
      width: 100%;
      max-height: 100svh`;
    }

    return () => {
      document.body.style.cssText = "";
    };
  }, [menuOpen]);

  return (
    <Container>
      <ButtonWrapper align="center" justify="space-between">
        <img
          src={image.userIcon.default}
          alt="유저 모양 아이콘"
          width={30}
          height={30}
        />

        <Link to="/">
          <img
            src={image.headerLogo.default}
            alt="Save the Earth"
            width={180}
          />
        </Link>

        <Button type="button" onClick={showHeaderHandler}>
          <img
            src={image.hamburgerIcon.default}
            alt="메뉴 버튼"
            width={22}
            height={22}
          />
        </Button>
      </ButtonWrapper>

      <MenuAllWrapper open={menuOpen}>
        <UtilMenuWrapper vertical>
          <Flex align="center" justify="flex-end">
            <button type="button" onClick={hideHeaderHandler}>
              <img src={image.closeIcon.default} alt="닫기" />
            </button>
          </Flex>

          <UtilMenu utilMenu={utilMenu} />
        </UtilMenuWrapper>

        <MainMenuWrapper>
          <LinkButton>
            <DonateButton>후원하기</DonateButton>
          </LinkButton>

          {menuTree?.map((menu, idx) => {
            return (
              <div key={menu.id}>
                <LinkButton
                  key={menu.id}
                  align="center"
                  justify="space-between"
                  open={openSubMenu[idx]}
                  onClick={() => toggleSubmenuHandler(idx)}
                >
                  <Link
                    to={menu.url}
                    onClick={() => {
                      if (!menu.subMenus) {
                        hideHeaderHandler();
                      }
                    }}
                  >
                    {menu.title}
                  </Link>

                  {menu.subMenus && (
                    <img src={image.arrowIcon.default} alt="메뉴 보기" />
                  )}
                </LinkButton>

                {menu.subMenus && (
                  <SubMenuWrapper open={openSubMenu[idx]}>
                    <SubMenuList vertical>
                      {menu.subMenus.map(submenu => {
                        return (
                          <Link
                            to={submenu.url}
                            key={submenu.id}
                            onClick={hideHeaderHandler}
                          >
                            {submenu.title}
                          </Link>
                        );
                      })}
                    </SubMenuList>
                  </SubMenuWrapper>
                )}
              </div>
            );
          })}
        </MainMenuWrapper>
      </MenuAllWrapper>
    </Container>
  );
};

export default MobileHeader;
