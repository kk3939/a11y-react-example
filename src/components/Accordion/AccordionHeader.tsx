import React from "react";
import styled from "styled-components";

type Props = {
  contentNum: "1" | "2" | "3";
  opened: boolean;
  setOpened: React.Dispatch<boolean>;
};

export const AccordionHeader: React.FC<Props> = ({
  contentNum,
  opened,
  setOpened,
}) => {
  return (
    <StyledHeader contentNum={contentNum}>
      <StyledButton
        type="button"
        aria-controls={`section${contentNum}`}
        id={`accordion${contentNum}`}
        onClick={() => setOpened(!opened)}
      >
        <span>header {contentNum}</span>
      </StyledButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.h3<{ contentNum: Props["contentNum"] }>`
  padding: 0.3rem;
  margin: 0;
  margin-top: -1px;
  margin-bottom: -1px;
  border-bottom: 1px solid #585858;
  border-top: 1px solid #585858;
  :hover {
    background-color: #eff3ff;
  }
`;

const StyledButton = styled.button`
  background: none;
  width: 100%;
  border-style: none;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: left;
`;
