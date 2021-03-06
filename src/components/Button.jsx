import styled from "styled-components";
import { useState } from "react";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { DotButton } from "./Dot.jsx";
import { Tooltip } from "@mui/material";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled.div`
  position: absolute;
  bottom: 96px;
  &:focus-visible {
    outline: unset;
  }
`;

export const Button = ({ icon, tooltip, children, bgColor }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [toolTipOpen, setToolTipOpen] = useState(false);

  return (
    // <Tooltip arrow={true} placement="top" title={tooltip}>
    <div>
      <DotButton
        onClick={handleOpen}
        active={open}
        sx={{ fontSize: 32 }}
        bgColor={bgColor}
      >
        {icon}
      </DotButton>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <ModalContent>{children}</ModalContent>
      </StyledModal>
    </div>
    // </Tooltip>
  );
};
