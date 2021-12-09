import styled, { ThemeProvider, css } from "styled-components";
import { Button } from "./components/Button.jsx";
import { useState } from "react";
import { darken } from "polished";
import { BrightnessSlider } from "./components/BrightnessSlider.jsx";
import { ColorTemp } from "./components/ColorTemp.jsx";
import { Dot } from "./components/Dot.jsx";
import useWindowFocus from "use-window-focus";
import { theme } from "./theme.js";
import { Brightness, Temperature } from "./assets/Icons.jsx";

const getBackgroundBrightness = (e) => {
  return 1 - (0.5 + e / 200);
};

// background-color: transparent;
// border: 100px solid
//   ${({ brightness, temp }) =>
//     darken(getBackgroundBrightness(brightness), temp)};

const SolidLightStyles = css`
  background-color: ${({ brightness, temp }) =>
    darken(getBackgroundBrightness(brightness), temp)};
`;

const SquareLightStyles = css`
  background-color: ${({ theme }) => theme.uiColors.ink};
  border: 100px solid
    ${({ brightness, temp }) =>
      darken(getBackgroundBrightness(brightness), temp)};
`;

const RingLightStyles = css`
  background-color: ${({ theme }) => theme.uiColors.ink};
  border-radius: 100%;
  border: 100px solid
    ${({ brightness, temp }) =>
      darken(getBackgroundBrightness(brightness), temp)};
  width: initial;
  aspect-ratio: 1 / 1;
`;

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.uiColors.ink};
`;

const LightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ brightness, temp }) =>
    darken(getBackgroundBrightness(brightness), temp)};
  width: 100%;
  height: 100%;
  transition: background-color 110ms;
  -webkit-app-region: drag;
  ${SolidLightStyles}
`;

const ButtonContainer = styled.div`
  display: flex;
  opacity: ${({ windowFocused }) => (windowFocused ? 1 : 0)};
  opacity: 1;
  transition: opacity 110ms;
  column-gap: 12px;
  -webkit-app-region: no-drag;
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
`;

export const App = () => {
  const [brightness, setBrightness] = useState(100);

  const handleBrightnessChange = (sliderValue) => {
    setBrightness(sliderValue);
  };

  const [temp, setTemp] = useState("#FFE7D1");

  const handleTempChange = (color) => {
    setTemp(color);
  };

  const windowFocused = useWindowFocus();

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <LightContainer brightness={brightness} temp={temp} />
        <ButtonContainer windowFocused={windowFocused}>
          <Button icon={<Brightness />} tooltip="Brightness">
            <BrightnessSlider
              getChange={handleBrightnessChange}
              brightness={brightness}
            />
          </Button>
          <Button icon={<Temperature />} tooltip="Temperature">
            <ColorTemp handleTempChange={handleTempChange} temp={temp} />
          </Button>
          <Dot />
        </ButtonContainer>
      </AppContainer>
    </ThemeProvider>
  );
};
