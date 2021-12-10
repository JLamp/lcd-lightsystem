import styled from "styled-components";
import { shade } from "polished";

export const Dot = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: transparent;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ active, theme }) =>
    active ? theme.uiColors.active : theme.uiColors.black};
  border-radius: 100%;
  box-sizing: border-box;
  ${({ active, theme }) =>
    active && "box-shadow: 0px 0px 0px 2px " + theme.uiColors.active};
  ${({ bgColor }) => "background-color: " + bgColor}
`;

export const DotButton = styled(Dot)`
  background-color: ${({ active, bgColor }) => active && shade(0.1, bgColor)};
  &:hover {
    background: ${({ bgColor }) => shade(0.1, bgColor)};
  }
`;

// export const NewDot = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 48px;
//   width: 48px;
//   border-radius: 100%;
//   ${({bgColor})}
// `;
