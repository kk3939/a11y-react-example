import React from "react";
import styled from "styled-components";

type Props = {
  checkBoxes: Array<{ checked: boolean; text: string }>;
  onClick: React.Dispatch<Array<{ checked: boolean; text: string }>>;
};

export const CheckBoxes: React.FC<Props> = ({ checkBoxes, onClick }) => {
  return (
    <div>
      <h3 id="checkBoxes">CheckBoxes</h3>
      <div role="group" aria-labelledby="checkBoxes">
        <StyledUl className="checkboxesUl">
          {checkBoxes.map((checkBox, index) => {
            return (
              // TODO:コンポーネント切り出して、Space enterで操作できるようにする。
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

const StyledLi = styled.li`
  padding: 0.5rem;
`;

const StyledCheckBox = styled.div<{
  checked: Props["checkBoxes"][number]["checked"];
}>`
  &:before {
    margin-right 2px;
    content: "${(props) => (props.checked ? "✅" : "◽️")}";
  }
`;
