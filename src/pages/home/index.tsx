import React from "react";
import * as Components from "../../components";

export const Home: React.FC = () => {
  return (
    <>
      <Components.Header />
      <Components.BannerHome />
      <Components.CardShop />
      <Components.Footer />
    </>
  );
};
