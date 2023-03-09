import React, { useState, useEffect } from "react";
import { RootState } from "../../../store/store";
import { Container, ContainerDisplay, DisplayCount } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBanner,
  changeBannerAuto,
} from "../../../store/slices/bannerSlice";

import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";

export const BannerHome: React.FC = () => {
  const bannerPosition = useSelector(
    (state: RootState) => state.banner.position
  );
  const dispatch = useDispatch();
  const [banners, setBanners] = useState<any>([
    banner1,
    banner2,
    banner3,
    banner4,
  ]);

  var timeout = setTimeout(() => dispatch(changeBannerAuto()), 15000);

  return (
    <Container background={banners[bannerPosition]}>
      <ContainerDisplay>
        <DisplayCount
          position={bannerPosition === 0 ? true : false}
          onClick={() => {
            clearTimeout(timeout);
            dispatch(changeBanner(0));
          }}
        />
        <DisplayCount
          position={bannerPosition === 1 ? true : false}
          onClick={() => {
            clearTimeout(timeout);
            dispatch(changeBanner(1));
          }}
        />
        <DisplayCount
          position={bannerPosition === 2 ? true : false}
          onClick={() => {
            clearTimeout(timeout);
            dispatch(changeBanner(2));
          }}
        />
        <DisplayCount
          position={bannerPosition === 3 ? true : false}
          onClick={() => {
            clearTimeout(timeout);
            dispatch(changeBanner(3));
          }}
        />
      </ContainerDisplay>
    </Container>
  );
};
