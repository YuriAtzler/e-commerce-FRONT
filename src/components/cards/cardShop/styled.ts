import styled from "styled-components";
import teste from "../../../assets/image.jpeg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  margin: 1rem;
  background-color: #444;
  border-radius: 20px;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${teste});
  background-size: cover;
  border-radius: 20px 20px 0 0;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
  padding: 0 7%;

  h1 {
    font-size: 26px;
    color: #fff;
    font-weight: bold;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 16px;
    color: #f4f4f4;
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50%;
  top: 55%;
  left: 50%;
  gap: 15px;
  border-radius: 100px 0 0 100px;
  background-color: #333;
  padding: 5px 10px;
`;
