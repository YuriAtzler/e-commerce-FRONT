import React, { useState } from "react";
import {
  Container,
  ContainerCategories,
  ContainerProductsList,
  TagCategory,
} from "./styled";
import * as Components from "../../";

export const SectionRecommended: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<number>(0);
  const categories = [
    "Todos",
    "Telefones",
    "Video games",
    "Livros",
    "Cadeiras",
    "Monitores",
    "Webcams",
    "Mesas",
    "Gabinetes",
    "Mouses",
    "Teclados",
    "Headsets",
    "Mousepads",
  ];

  return (
    <Container>
      <h1>Produtos</h1>
      <ContainerCategories>
        {categories.map((item, index) => (
          <TagCategory
            selected={categorySelected === index ? true : false}
            onClick={() => setCategorySelected(index)}
          >
            {item}
          </TagCategory>
        ))}
      </ContainerCategories>
      <ContainerProductsList>
        <Components.CardShop />
        <Components.CardShop />
        <Components.CardShop />
        <Components.CardShop />
        <Components.CardShop />
      </ContainerProductsList>
    </Container>
  );
};
