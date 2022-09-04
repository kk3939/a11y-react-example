import React from "react";
import styled from "styled-components";

type Props = {
  id: string;
  ariaControls: string;
  children: React.ReactNode;
  openSection: string[];
  setOpenSection: React.Dispatch<string[]>;
};

export const AccordionHeader: React.FC<Props> = ({
  setOpenSection,
  ariaControls,
  id,
  children,
  openSection,
}) => {
  return (
    <StyledHeader>
      <StyledButton
        type="button"
        aria-controls={ariaControls}
        id={id}
        onClick={() => {
          if (openSection.includes(ariaControls)) {
            const newOpenSection = openSection.filter(
              (section) => section !== ariaControls
            );
            setOpenSection(newOpenSection);
            return;
          }
          const newOpenSection = [...openSection, ariaControls];
          setOpenSection(newOpenSection);
        }}
      >
        {children}
      </StyledButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.h3`
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
