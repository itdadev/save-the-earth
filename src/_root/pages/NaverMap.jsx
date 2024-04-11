import React, { useEffect } from "react";

const NaverMap = () => {
  useEffect(() => {
    const lotteworld = new window.naver.maps.LatLng(37.6629643, 126.9520536);

    const contentString = [
      '<div class="iw_inner" style="padding: 1.6rem; font-size: 1.4rem;">',
      "   <h3>세이브더얼스</h3>",
      "   <p>경기도 고양시 덕양구 북한산로 424-7<br>",
      "       (우편번호 : 10582)<br>",
      "   </p>",
      "</div>",
    ].join("");

    var map = new window.naver.maps.Map("map", {
      center: lotteworld, // 잠실 롯데월드를 중심으로 하는 지도
      zoom: 15,
    });

    const marker = new window.naver.maps.Marker({
      map: map,
      position: lotteworld,
    });

    const infowindow = new window.naver.maps.InfoWindow({
      content: contentString,
    });

    infowindow.open(map, marker);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        aspectRatio: "5 / 4",
      }}
    />
  );
};

export default NaverMap;
