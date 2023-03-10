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
import * as Components from "../../";

export const CardShop: React.FC = () => {
  const discount = true;

  return (
    <Container>
      <ContainerImage />
      {discount ? (
        <ContainerDescription discount={true}>
          <h1>nome gigantesco gigantesco</h1>
          <Components.Divider margin={"5px 0px"} />
          <div>
            <h5>R$: 88,99</h5>
            <p>R$: 88,99</p>
          </div>
        </ContainerDescription>
      ) : (
        <ContainerDescription>
          <h1>nome gigantesco gigantesco</h1>
          <Components.Divider margin={"5px 0px"} />
          <p>R$: 88,99</p>
        </ContainerDescription>
      )}
      <ContainerOptions>
        <MdAddShoppingCart size={25} color={"white"} />
        <MdFavorite size={25} color={"white"} />
      </ContainerOptions>
    </Container>
  );
};
