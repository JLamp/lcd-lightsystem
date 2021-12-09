import styled from "styled-components";
import { Popover, Slider } from "@mui/material";
import { useState, useRef } from "react";

const ButtonComponent = styled.div`
  width: 48px;
  height: 48px;
  background: transparent;
  border: 4px solid ${({ active }) => (active ? "blue" : "black")};
  border-radius: 100%;
`;

const SliderContainer = styled.div`
  height: 100px;
  width: 48px;
  padding: 16px;
`;

export const Button = () => {
  const buttonRef = useRef(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <ButtonComponent
        onClick={handlePopoverOpen}
        ref={buttonRef}
        active={open}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        style={{ transform: "translateY(-12px)" }}
      >
        <SliderContainer>
          <Slider
            aria-label="Temperature"
            orientation="vertical"
            getAriaValueText={null}
            defaultValue={30}
          />
        </SliderContainer>
      </Popover>
    </>
  );
};
