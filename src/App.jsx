import styled, { ThemeProvider, css } from "styled-components";
import { Button } from "./components/Button.jsx";
import { useState } from "react";
import { darken, transparentize } from "polished";
import { BrightnessSlider } from "./components/BrightnessSlider.jsx";
import { ColorTemp } from "./components/ColorTemp.jsx";
import { DotButton } from "./components/Dot.jsx";
import useWindowFocus from "use-window-focus";
import { theme } from "./theme.js";
import {
  Brightness,
  Temperature,
  SolidLight,
  RingLight,
} from "./components/Icons.jsx";
import { useWindowSize } from "./components/useWindowSize.jsx";

const LightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  -webkit-app-region: drag;
  background-color: ${({ lightColor, isRingLight, theme }) =>
    isRingLight ? theme.uiColors.ink : lightColor};
`;

const ButtonContainer = styled.div`
  display: flex;
  opacity: ${({ windowFocused }) => (windowFocused ? 1 : 0)};
  opacity: 1;
  column-gap: 12px;
  -webkit-app-region: no-drag;
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
`;

const wideOrientation = css`
  width: 100vh;
  height: 100vh;
`;

const RingLightDiv = styled.div`
  width: 100vw;
  height: 100vw;
  border-radius: 100%;
  border-width: 100px;
  border-style: solid;
  border-color: ${({ lightColor }) => lightColor};
  ${({ wide }) => wide && wideOrientation};
  opacity: ${({ isRingLight }) => (isRingLight ? 1 : 0)};
`;

const getBackgroundBrightness = (e) => {
  return 1 - (0.5 + e / 200);
};

const getLightColor = (brightness, temp) => {
  const backgroundBrightness = getBackgroundBrightness(brightness);
  return darken(backgroundBrightness, temp);
};

export const App = () => {
  const DEFAULT_LIGHT_COLOR = "#FFE7D1";
  const [brightness, setBrightness] = useState(100);
  const [isRingLight, setRingLight] = useState(false);
  const [temp, setTemp] = useState(DEFAULT_LIGHT_COLOR);
  const [lightColor, setLightColor] = useState(DEFAULT_LIGHT_COLOR);

  const handleBrightnessChange = (sliderValue) => {
    setBrightness(sliderValue);
    setLightColor(getLightColor(sliderValue, temp));
  };

  const handleTempChange = (color) => {
    setTemp(color);
    setLightColor(getLightColor(brightness, color));
  };

  const windowFocused = useWindowFocus();

  const styleIcon = isRingLight ? <SolidLight /> : <RingLight />;

  const size = useWindowSize();

  const wide = size.width > size.height;

  return (
    <ThemeProvider theme={theme}>
      <LightContainer lightColor={lightColor} isRingLight={isRingLight}>
        <RingLightDiv
          wide={wide}
          lightColor={lightColor}
          isRingLight={isRingLight}
        />
      </LightContainer>
      <ButtonContainer windowFocused={windowFocused} lightColor={lightColor}>
        <Button icon={<Brightness />} tooltip="Brightness" bgColor={lightColor}>
          <BrightnessSlider
            getChange={handleBrightnessChange}
            brightness={brightness}
            temp={temp}
            lightColor={lightColor}
          />
        </Button>
        <Button
          icon={<Temperature />}
          tooltip="Temperature"
          bgColor={lightColor}
        >
          <ColorTemp
            handleTempChange={handleTempChange}
            temp={temp}
            bgColor={lightColor}
          />
        </Button>
        <DotButton
          onClick={() => setRingLight(!isRingLight)}
          bgColor={lightColor}
        >
          {styleIcon}
        </DotButton>
      </ButtonContainer>
    </ThemeProvider>
  );
};
