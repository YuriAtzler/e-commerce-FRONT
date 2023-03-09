import React from "react";
import { Container } from "./styled";
import * as Components from "../";

export const Header: React.FC = () => {
  return (
    <Container>
      <Components.Search />
      <Components.Select />
    </Container>
  );
};
