import React, { useEffect } from "react";
import styled from "styled-components";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
};

export const AlertDialog: React.FC<Props> = ({ open, setOpen }) => {
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
      return;
    }
    body.style.overflow = "";
  }, [open]);

  return (
    <>
      <StyledOverlay open={open} />
      <StyledDialogWrapper open={open}>
        <div style={{ width: "300px" }}>
          <h2>alert dialog</h2>
          <StyledButton
            type="button"
            buttonType="yes"
            onClick={() => setOpen(false)}
          >
            Yes
          </StyledButton>
          <StyledButton
            type="button"
            buttonType="close"
            onClick={() => setOpen(false)}
          >
            Close
          </StyledButton>
        </div>
      </StyledDialogWrapper>
    </>
  );
};

const StyledDialogWrapper = styled.div<{ open: Props["open"] }>`
  ${(props) => (props.open ? "display: flex" : "display: none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e9e9e9;
  padding: 20px;
  border-radius: 10px;
`;

const StyledOverlay = styled.div<{ open: Props["open"] }>`
  ${(props) => (props.open ? "display: block" : "display: none")};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;

const StyledButton = styled.button<{ buttonType: "yes" | "close" }>`
  padding: 10px;
  border-style: none;
  ${(props) =>
    props.buttonType === "yes"
      ? "background-color: #28b13d;"
      : "background-color: #bcbcbc;"};
  border-radius: 10px;
  margin: 3px;
  font-size: 1rem;
  font-weight: normal;
`;
