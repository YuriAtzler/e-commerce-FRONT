import React from "react";
import { Container, ContainerSeparator } from "./styled";
import * as Components from "../";

export const Header: React.FC = () => {
  return (
    <Container>
      <ContainerSeparator width={"30%"}>
        <h3>Logo</h3>
      </ContainerSeparator>
      <ContainerSeparator width={"40%"}>
        <Components.Search />
        <Components.Select />
      </ContainerSeparator>
      <ContainerSeparator width={"30%"}>
        <h3>Carrinho e outras funções</h3>
      </ContainerSeparator>
    </Container>
  );
};
