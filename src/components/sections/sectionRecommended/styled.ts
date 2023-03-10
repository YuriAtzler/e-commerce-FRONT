import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 75px 0px;
  gap: 2rem;
`;

export const ContainerCategories = styled.div`
  max-width: 60%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ContainerProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  align-items: center;
  justify-content: center;
`;

export const TagCategory = styled.p<any>`
  font-size: 16px;
  background-color: ${({ selected }) => (selected ? "#444" : "#cfd2d7")};
  color: ${({ selected }) => (selected ? "#f4f4f4" : "#444")};
  padding: 10px 20px;
  border-radius: 100px;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
