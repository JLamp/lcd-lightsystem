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

const StyledSlider = styled(SliderUnstyled)`
  height: 48px;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.uiColors.ink};
  border-radius: 48px;
  width: 360px;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  background: linear-gradient(
    to right,
    ${({ sliderValue }) =>
      "white " +
      sliderValue +
      "%, black " +
      sliderValue +
      "% " +
      (sliderValue + 0.5) +
      "%, transparent " +
      (sliderValue + 0.5) +
      "% 100%"}
  );

  & .MuiSlider-rail,
  .muiSlider-track,
  .MuiSlider-thumb {
    display: none;
  }

  &:focus-visible {
    outline: unset;
  }
`;

export const BrightnessSlider = ({ getChange, brightness }) => {
  const [sliderValue, setSliderValue] = useState(brightness);

  return (
    <SliderContainer>
      <Value sliderValue={sliderValue}>{sliderValue + "%"}</Value>
      <StyledSlider
        defaultValue={brightness}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(e) => {
          setSliderValue(e.target.value);
          getChange(e.target.value);
        }}
        sliderValue={sliderValue}
      />
    </SliderContainer>
  );
};
