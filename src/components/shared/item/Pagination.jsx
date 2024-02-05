import React, { useCallback, useState } from "react";
import { image } from "@/theme";
import styled from "@emotion/styled";
import { Flex } from "antd";

const Container = styled(Flex)(() => ({
  fontSize: "1.8rem",
}));

const PaginationNumber = styled.button(({ active }) => ({
  textDecoration: active ? "underline" : "none",
  ":hover": {
    textDecoration: "underline",
  },
}));

const PaginationArrow = styled.img(({ right, disable }) => ({
  width: "2.5rem",
  height: "2.5rem",
  cursor: disable ? "default" : "pointer",
  transform: right ? "rotate(180deg)" : "rotate(0)",
}));
const Pagination = ({ total, active, setActive }) => {
  const LENGTH_PER_PAGE = 4;

  const changePageHandler = useCallback(
    i => {
      setActive(i);
    },
    [setActive],
  );

  const nextPageHandler = useCallback(
    i => {
      setActive(prev => prev + 1);
    },
    [setActive],
  );

  const prevPageHandler = useCallback(
    i => {
      setActive(prev => prev - 1);
    },
    [setActive],
  );

  const totalPage = Math.ceil(total / LENGTH_PER_PAGE);

  return (
    total > 3 && (
      <Container align="center" justify="flex-end" gap="0 0.4rem">
        {active <= 1 ? (
          <img
            src={image.paginationArrowDisabled.default}
            alt=""
            width={25}
            height={25}
          />
        ) : (
          <PaginationArrow
            src={image.paginationArrow.default}
            alt="전 페이지로 이동"
            onClick={prevPageHandler}
            disable={active <= 1}
          />
        )}

        {Array(totalPage)
          .fill()
          .map((_, i) => {
            return (
              <PaginationNumber
                type="button"
                key={i}
                active={active === i + 1}
                onClick={() => changePageHandler(i + 1)}
              >
                {i + 1}
              </PaginationNumber>
            );
          })}

        {active >= totalPage ? (
          <PaginationArrow
            src={image.paginationArrowDisabled.default}
            alt=""
            width={25}
            height={25}
            disable
            right
          />
        ) : (
          <PaginationArrow
            src={image.paginationArrow.default}
            alt="다음 페이지로 이동"
            right
            onClick={nextPageHandler}
          />
        )}
      </Container>
    )
  );
};

export default Pagination;
