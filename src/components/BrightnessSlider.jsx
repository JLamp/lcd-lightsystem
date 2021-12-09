import styled from "styled-components";
import { useState } from "react";
import SliderUnstyled from "@mui/base/SliderUnstyled";

const StyledSlider = styled(SliderUnstyled)`
  height: 48px;
  display: flex;
  align-items: center;
  border: 4px solid black;
  border-radius: 48px;
  width: 360px;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  background: linear-gradient(
    to right,
    black
      ${({ sliderValue }) =>
        sliderValue + "%, transparent " + sliderValue + "% 100%"}
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

export const BrightnessSlider = ({ getChange }) => {
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <StyledSlider
      defaultValue={100}
      aria-label="Default"
      valueLabelDisplay="auto"
      onChange={(e) => {
        setSliderValue(e.target.value);
        getChange(sliderValue);
      }}
      sliderValue={sliderValue}
    />
  );
};
