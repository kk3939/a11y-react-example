import React from "react";
import styled from "styled-components";
import { CheckBoxesProps } from ".";

type Props = {
  index: number;
  checkBoxes: Array<{ checked: boolean; text: string }>;
  checkBox: { checked: boolean; text: string };
  onClick: React.Dispatch<Array<{ checked: boolean; text: string }>>;
};

export const CheckBox: React.FC<Props> = ({
  index,
  checkBox,
  checkBoxes,
  onClick,
}) => {
  return (
    <StyledLi key={index}>
      <StyledCheckBox
        checked={checkBox.checked}
        role="checkbox"
        aria-checked={checkBox.checked}
        tabIndex={0}
        onClick={() => {
          const newCheckBoxes = checkBoxes.map((c, i) => {
            if (i === index) {
              return {
                checked: !checkBox.checked,
                text: c.text,
              };
            }
            return c;
          });
          onClick(newCheckBoxes);
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
