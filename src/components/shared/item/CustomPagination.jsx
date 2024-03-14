import React, { useCallback } from "react";
import { Flex, Pagination } from "antd";
import styled from "@emotion/styled";

import { LOAD_SIZE_4 } from "@/constants/queryKeys";

const Container = styled(Flex)(() => ({
  marginBottom: "1rem",
}));

const CustomPagination = ({ total, active, setActive }) => {
  const changePageHandler = useCallback(
    i => {
      setActive(i);
    },
    [setActive],
  );

  return (
    <Container justify="flex-end">
      <Pagination
        total={total}
        defaultCurrent={active}
        defaultPageSize={LOAD_SIZE_4}
        onChange={changePageHandler}
        size="small"
      />
    </Container>
  );
};

export default CustomPagination;
