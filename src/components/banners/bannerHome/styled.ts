import styled from "styled-components";

export const Container = styled.div<any>`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url(${({ background }) => background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContainerDisplay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  left: auto;
  top: 90%;
  left: 50%;
  width: 200px;
  margin: 0px 0px 0px -100px;
`;

export const DisplayCount = styled.div<any>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ position }) => (position ? "#444" : "#fff")};
`;
