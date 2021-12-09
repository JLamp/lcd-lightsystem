import styled from "styled-components";
import { Button } from "./components/Button.jsx";
import { useState } from "react";
import { darken } from "polished";
import { BrightnessSlider } from "./components/BrightnessSlider.jsx";
import { ColorTemp } from "./components/ColorTemp.jsx";
import { Dot } from "./components/Dot.jsx";
import useWindowFocus from "use-window-focus";
// import { Settings } from "./Settings";

const LightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ brightness, temp }) => darken(brightness, temp)};
  width: 100vw;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 48px;
  opacity: ${({ windowFocused }) => (windowFocused ? 1 : 0)};
  opacity: 1;
  transition: all 110ms;
  & > div:not(:last-child) {
    margin-right: 24px;
  }
`;

export const App = () => {
  const [brightness, setBrightness] = useState(100);

  const handleBrightnessChange = (sliderValue) => {
    setBrightness(1 - (0.5 + sliderValue / 200));
  };

  const [temp, setTemp] = useState("blue");

  const handleTempChange = (color) => {
    setTemp(color);
  };

  const windowFocused = useWindowFocus();

  return (
    <LightContainer brightness={brightness} temp={temp}>
      <ButtonContainer windowFocused={windowFocused}>
        <Button>
          <BrightnessSlider getChange={handleBrightnessChange} />
        </Button>
        <Button>
          <ColorTemp handleTempChange={handleTempChange} temp={temp} />
        </Button>
        <Dot />
      </ButtonContainer>
    </LightContainer>
  );
};
