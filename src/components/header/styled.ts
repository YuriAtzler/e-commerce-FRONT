import styled from "styled-components";

interface IContainerSeparator {
  width?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: 0%;
`;

export const ContainerSeparator = styled.div<IContainerSeparator>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: ${({ width }) => (width ? width : "auto")};

  h3 {
    color: #f4f4f4;
  }
`;
