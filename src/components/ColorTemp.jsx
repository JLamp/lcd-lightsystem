import styled from "styled-components";
import { Dot } from "./Dot.jsx";

const COLORS = ["#E9F5FF", "#fff", "#FEEFC8", "#FFDF96"];

const ColorContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 16px;
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
