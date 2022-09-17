import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { CheckBoxesProps } from ".";

type Props = {
  index: number;
  checkFunction: (index: Props["index"]) => void;
  checkBox: { checked: boolean; text: string };
};

export const CheckBox: React.FC<Props> = ({
  index,
  checkBox,
  checkFunction,
}) => {
  const checkboxRef = useRef<HTMLDivElement | null>(null);
  const checkFunctionSpaceKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Space") {
        checkFunction(index);
      }
    },
    [checkFunction, index]
  );

  useEffect(() => {
    const element = checkboxRef.current;
    element && element.addEventListener("keydown", checkFunctionSpaceKey);
    return () => {
      element && element.removeEventListener("keydown", checkFunctionSpaceKey);
    };
  }, [checkFunctionSpaceKey]);

  return (
    <StyledLi key={index}>
      <StyledCheckBox
        ref={checkboxRef}
        checked={checkBox.checked}
        role="checkbox"
        aria-checked={checkBox.checked}
        tabIndex={0}
        onClick={() => {
          checkFunction(index);
        }}
      >
        {checkBox.text}
      </StyledCheckBox>
    </StyledLi>
  );
};

const StyledLi = styled.li`
  padding: 0.5rem;
`;

const StyledCheckBox = styled.div<{
  checked: CheckBoxesProps["checkBoxes"][number]["checked"];
}>`
  &:before {
    margin-right 2px;
    content: "${(props) => (props.checked ? "✅" : "◽️")}";
  }
`;
