import React from "react";
import styled from "styled-components";
import { CheckBox } from "./CheckBox";

export type CheckBoxesProps = {
  checkBoxes: Array<{ checked: boolean; text: string }>;
  onClick: React.Dispatch<Array<{ checked: boolean; text: string }>>;
};

export const CheckBoxes: React.FC<CheckBoxesProps> = ({
  checkBoxes,
  onClick,
}) => {
  return (
    <div>
      <h3 id="checkBoxes">CheckBoxes</h3>
      <div role="group" aria-labelledby="checkBoxes">
        <StyledUl className="checkboxesUl">
          {checkBoxes.map((checkBox, index) => {
            return (
              <CheckBox
                key={index}
                index={index}
                checkBoxes={checkBoxes}
                checkBox={checkBox}
                onClick={onClick}
              />
            );
          })}
        </StyledUl>
      </div>
    </div>
  );
};

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
