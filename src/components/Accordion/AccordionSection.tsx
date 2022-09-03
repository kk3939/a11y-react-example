import React from "react";
import styled from "styled-components";

type Props = {
  contentNum: "1" | "2" | "3";
  opened: boolean;
};

export const AccordionSection: React.FC<Props> = ({ contentNum, opened }) => {
  return (
    <StyledSection
      id={`section${contentNum}`}
      role="region"
      aria-labelledby={`accordion${contentNum}`}
      hidden={!opened}
    >
      <span>section {contentNum}</span>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  margin: 0;
  padding: 1rem;
`;
