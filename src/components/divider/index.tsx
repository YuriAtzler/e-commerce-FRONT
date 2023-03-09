import React from "react";
import { DividerContainer } from "./styled";

interface IProps {
  height?: number;
  width?: number | string;
  color?: string;
  margin?: string;
}

export const Divider: React.FC<IProps> = ({ margin, height, width, color }) => {
  return (
    <DividerContainer
      margin={margin}
      height={height}
      width={width}
      color={color}
    />
  );
};
