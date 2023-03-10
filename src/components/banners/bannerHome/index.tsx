import React, { useState, useEffect } from "react";
import { RootState } from "../../../store/store";
import { Container, ContainerDisplay, DisplayCount } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeBannerAuto } from "../../../store/slices/bannerSlice";

import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";
import banner4 from "../../../assets/banner4.png";

export const BannerHome: React.FC = () => {
  const bannerPosition = useSelector(
    (state: RootState) => state.banner.position
  );
  const dispatch = useDispatch();
  const [banners] = useState<any>([banner1, banner2, banner3, banner4]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeBannerAuto());
    }, 10000);
  });

  return (
    <Container background={banners[bannerPosition]}>
      <ContainerDisplay>
        <DisplayCount position={bannerPosition === 0 ? true : false} />
        <DisplayCount position={bannerPosition === 1 ? true : false} />
        <DisplayCount position={bannerPosition === 2 ? true : false} />
        <DisplayCount position={bannerPosition === 3 ? true : false} />
      </ContainerDisplay>
    </Container>
  );
};
