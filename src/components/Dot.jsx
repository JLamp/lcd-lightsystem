import styled from "styled-components";

export const Dot = styled.button`
  unset: all;
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
`;
