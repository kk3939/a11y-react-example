import React from "react";
import styled from "styled-components";

type Props = {
  id: string;
  ariaLabeledBy: string;
  children: React.ReactNode;
  openSection: string[];
};

export const AccordionSection: React.FC<Props> = ({
  id,
  ariaLabeledBy,
  children,
  openSection,
}) => {
  return (
    <StyledSection
      id={id}
      role="region"
      aria-labelledby={ariaLabeledBy}
      hidden={!openSection.includes(id)}
    >
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.div`
  margin: 0;
  padding: 1rem;
`;
