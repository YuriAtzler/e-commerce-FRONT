import React from "react";
import {
  Container,
  ContainerImage,
  ContainerDescription,
  ContainerOptions,
} from "./styled";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdAddShoppingCart,
} from "react-icons/md";

export const CardShop: React.FC = () => {
  return (
    <Container>
      <ContainerImage />
      <ContainerDescription>
        <h1>teste</h1>
        <p>88,99</p>
      </ContainerDescription>
      <ContainerOptions>
        <MdAddShoppingCart size={25} color={"white"} />
        <MdFavorite size={25} color={"white"} />
      </ContainerOptions>
    </Container>
  );
};
