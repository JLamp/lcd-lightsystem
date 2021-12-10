import styled from "styled-components";
import { useState } from "react";
import SliderUnstyled from "@mui/base/SliderUnstyled";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  -webkit-app-region: no-drag;
`;

const Value = styled.span`
  position: absolute;
  ${({ sliderValue }) =>
    sliderValue > 50
      ? "right: " + (100 - (sliderValue - 5)) + "%"
      : "left: " + (sliderValue + 5) + "%"};
  font-weight: bold;
  color: ${({ theme }) => theme.uiColors.ink};
  pointer-events: none;
`;

const StyledSlider = styled(SliderUnstyled).attrs(
  ({ temp, value, lightcolor }) => ({
    style: {
      background:
        "linear-gradient(to right, " +
        temp +
        " " +
        value +
        "%, black " +
        value +
        "% " +
        (value + 0.5) +
        "%, " +
        lightcolor +
        " " +
        (value + 0.5) +
        "% 100%" +
        ")",
    },
  })
)`
  height: 48px;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.uiColors.ink};
  border-radius: 48px;
  width: 360px;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  & .MuiSlider-rail,
  .muiSlider-track,
  .MuiSlider-thumb {
    display: none;
  }

  &:focus-visible {
    outline: unset;
  }
`;

export const BrightnessSlider = ({
  getChange,
  brightness,
  temp,
  lightColor,
}) => {
  return (
    <SliderContainer>
      <Value sliderValue={brightness}>{brightness + "%"}</Value>
      <StyledSlider
        defaultValue={brightness}
        aria-label="Brightness"
        onChange={(e) => {
          getChange(e.target.value);
        }}
        value={brightness}
        temp={temp}
        lightcolor={lightColor}
      />
    </SliderContainer>
  );
};
