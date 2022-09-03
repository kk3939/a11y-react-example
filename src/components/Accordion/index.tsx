import React from "react";
import { AccordionContainer } from "./AccordionContainer";
import styled from "styled-components";

export type ExpandedSection = "1" | "2" | "3" | "none";

export const Accordion: React.FC = () => {
  const array: Array<"1" | "2" | "3"> = ["1", "2", "3"];

  return (
    <AccordionWrapper>
      {array.map((contentNum, i) => {
        return <AccordionContainer key={i} contentNum={contentNum} />;
      })}
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  padding: 0;
  margin: 0;
  border: 2px solid #585858;
  border-radius: 5px;
  width: 200px;
`;
