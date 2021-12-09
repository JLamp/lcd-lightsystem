import styled from "styled-components";

export const Dot = styled.div`
  width: 64px;
  height: 64px;
  background: transparent;
  border: ${({ active }) => (active ? "4px solid blue" : "2px solid black")};
  border-radius: 100%;
  box-sizing: border-box;
`;
