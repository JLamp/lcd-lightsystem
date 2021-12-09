import styled from "styled-components";
import { Dot } from "./Dot.jsx";

const COLORS = ["#FFFFFF", "#FFE7D1", "#FFC68C"];

const ColorContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 12px;
  justify-content: center;
`;

const ColorDot = styled(Dot)`
  background: ${({ color }) => color};
`;

export const ColorTemp = ({ handleTempChange, temp }) => {
  return (
    <ColorContainer>
      {COLORS.map((color, index) => (
        <ColorDot
          key={index}
          color={color}
          onClick={() => handleTempChange(color)}
          active={temp === color}
        />
      ))}
    </ColorContainer>
  );
};
