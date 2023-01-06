import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
};

export const AlertDialog: React.FC<Props> = ({ open, setOpen }) => {
  const openTriggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogWrapperRef = useRef<HTMLDivElement | null>(null);
  const firstButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastButtonRef = useRef<HTMLButtonElement | null>(null);

  const escKeyHandler = useCallback(
    (event: KeyboardEvent) => {
      //  not respond to IE and Edge
      if (event.key === "Escape") {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    const body = document.body;
    const dialogWrapperRefCurrent = dialogWrapperRef.current;

    dialogWrapperRefCurrent &&
      dialogWrapperRefCurrent.addEventListener("keydown", escKeyHandler);

    if (open) {
      body.style.overflow = "hidden";
      openTriggerRef.current = document.activeElement as HTMLButtonElement;
      const firstButtonRefCurrent = firstButtonRef.current;
      firstButtonRefCurrent && firstButtonRefCurrent.focus();
    } else {
      body.style.overflow = "";
      openTriggerRef && openTriggerRef.current?.focus();
    }
    return () => {
      dialogWrapperRefCurrent &&
        dialogWrapperRefCurrent.removeEventListener("keydown", escKeyHandler);
    };
  }, [escKeyHandler, open]);

  return (
    <>
      <StyledOverlay open={open} />
      <div
        tabIndex={open ? 0 : -1}
        id="dummy-dialog-pre"
        role="button"
        onFocus={() => {
          const lastEle = lastButtonRef.current;
          lastEle && lastEle.focus();
        }}
      />
      <StyledDialogWrapper
        ref={dialogWrapperRef}
        open={open}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="dialog_label"
        aria-describedby="dialog_desc"
      >
        <div style={{ width: "300px" }}>
          <h2 id="dialog_label">alert dialog</h2>
          <p id="dialog_desc">please click button.</p>
          <StyledButton
            ref={firstButtonRef}
            type="button"
            buttonType="yes"
            onClick={() => setOpen(false)}
          >
            Yes
          </StyledButton>
          <StyledButton
            ref={lastButtonRef}
            type="button"
            buttonType="close"
            onClick={() => setOpen(false)}
          >
            Close
          </StyledButton>
        </div>
      </StyledDialogWrapper>
      <div
        tabIndex={open ? 0 : -1}
        id="dummy-dialog-next"
        role="button"
        onFocus={() => {
          const firstButtonRefCurrent = firstButtonRef.current;
          firstButtonRefCurrent && firstButtonRefCurrent.focus();
        }}
      />
    </>
  );
};

const StyledDialogWrapper = styled.div<{ open: Props["open"] }>`
  ${(props) => (props.open ? "display: inline-block" : "display: none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e9e9e9;
  padding: 20px;
  z-index: 2;
  border-radius: 10px;
`;

const StyledOverlay = styled.div<{ open: Props["open"] }>`
  ${(props) => (props.open ? "display: block" : "display: none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
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
