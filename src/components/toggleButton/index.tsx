import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {
  on: boolean;
  setOn: React.Dispatch<boolean>;
};

export const ToggleButton: React.FC<Props> = ({ on, setOn }) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const EnterAndSpaceFunc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.code === "Space") {
        setOn(!on);
      }
    },
    [on, setOn]
  );

  useEffect(() => {
    const element = buttonRef.current;
    element && element.addEventListener("keydown", EnterAndSpaceFunc);
    return () => {
      element && element.removeEventListener("keydown", EnterAndSpaceFunc);
    };
  }, [EnterAndSpaceFunc]);

  return (
    <StyledButton
      ref={buttonRef}
      role="button"
      tabIndex={0}
      aria-pressed={on}
      onClick={() => setOn(!on)}
    >
      <span>ToggleButton is {on ? "on" : "off"}</span>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  background-color: rgb(38, 124, 199);
  color: beige;
  width: fit-content;
  align-items: center;
  padding: 1em;
  border-radius: 3em;
`;
