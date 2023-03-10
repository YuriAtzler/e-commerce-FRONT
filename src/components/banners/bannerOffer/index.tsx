import React from "react";
import { Container, ContainerProductsOffer } from "./styled";
import * as Components from "../../";

export const BannerOffer: React.FC = () => {
  return (
    <Container>
      <h1>Ofertas relâmpago!</h1>
      <Components.Divider color="#444" width={350} margin={"10px"} />
      <p>Não perca esses descontos maravilhosos.</p>
      <Components.Divider
        color="#444"
        width={"90%"}
        height={10}
        margin={"20px 10px"}
        borderRadius={"100px"}
      />
      <ContainerProductsOffer>
        <Components.CardShop />
        <Components.CardShop />
        <Components.CardShop />
        <Components.CardShop />
      </ContainerProductsOffer>
      <Components.Divider
        color="#444"
        width={"90%"}
        height={10}
        margin={"10px 20px"}
        borderRadius={"100px"}
      />
    </Container>
  );
};
