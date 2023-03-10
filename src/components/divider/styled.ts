import styled from "styled-components";

interface IProps {
  height?: number;
  width?: number | string;
  color?: string;
  margin?: string;
  borderRadius?: string;
}

export const DividerContainer = styled.div<IProps>`
  height: ${({ height }) => (height ? `${height}px` : "1px")};
  width: ${({ width }) => {
    if (typeof width === "string") return width;
    else return width ? `${width}px` : "100%";
  }};
  background-color: ${({ color }) => (color ? color : "#fff")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};
`;
