import React, { useCallback, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import {
  CommonContainer,
  CommonPageContainer,
} from "@/components/ui/container";
import { CommonTitleTwo } from "@/components/ui/fonts/Fonts";
import { ImageFigure } from "@/components/ui/image";
import { CustomPagination } from "@/components/shared/item";
import { LOAD_SIZE_4, MEMBER_LIST_QUERY_KEY } from "@/constants/queryKeys";
import { MEMBER_API } from "@/constants/apiUrls";
import {
  MediaItem,
  MediaTexts,
  MediaTitle,
  MediaList,
} from "@/_root/pages/corporation/Media";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)(() => ({
  width: "100%",
}));
const OurMember = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);

  const { data: memberList } = useQuery({
    queryKey: [MEMBER_LIST_QUERY_KEY, active],
    queryFn: async () =>
      await axios.get(`${MEMBER_API}?page=${active}&limit=${LOAD_SIZE_4}`),
    select: data => {
      return data?.data;
    },
  });

  const goToDetail = useCallback(
    id => {
      navigate(`/our-member/${id}`);
    },
    [navigate],
  );

  return (
    <CommonPageContainer>
      <CommonContainer>
        <CommonTitleTwo>우리 회원 공간</CommonTitleTwo>

        <CustomPagination
          total={memberList?.totalCnt}
          active={active}
          setActive={setActive}
        />

        <MediaList>
          {memberList?.data?.map((member, idx) => {
            return (
              <MediaItem
                key={member.member_seq}
                onClick={() => goToDetail(member.member_seq)}
                clickable
              >
                <ImageFigure ratio="4 / 3" height="30rem">
                  <img src={member.image_url} alt={member.member_title} />
                </ImageFigure>

                <MediaTexts
                  order={idx % 2}
                  vertical
                  gap="2rem 0"
                  align="center"
                  justify="center"
                >
                  <MediaTitle className="ellipsis-1">
                    {member.member_title}
                  </MediaTitle>

                  <div className="ellipsis-3">{member.member_content}</div>
                </MediaTexts>
              </MediaItem>
            );
          })}
        </MediaList>
      </CommonContainer>
    </CommonPageContainer>
  );
};

export default OurMember;
