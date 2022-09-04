import React, { useState } from "react";
import styled from "styled-components";
import { AccordionSection } from "./AccordionSection";
import { AccordionHeader } from "./AccordionHeader";

export const Accordion: React.FC = () => {
  const [openSection, setOpenSection] = useState<string[]>([]);

  return (
    <AccordionWrapper>
      <AccordionHeader
        setOpenSection={setOpenSection}
        id="header1"
        openSection={openSection}
        ariaControls="section1"
      >
        <p>header1</p>
      </AccordionHeader>
      <AccordionSection
        id="section1"
        ariaLabeledBy="header1"
        openSection={openSection}
      >
        <p>section1</p>
      </AccordionSection>
      <AccordionHeader
        setOpenSection={setOpenSection}
        id="header2"
        openSection={openSection}
        ariaControls="section2"
      >
        <p>header2</p>
      </AccordionHeader>
      <AccordionSection
        id="section2"
        ariaLabeledBy="header2"
        openSection={openSection}
      >
        <p>section2</p>
      </AccordionSection>
      <AccordionHeader
        setOpenSection={setOpenSection}
        id="header3"
        openSection={openSection}
        ariaControls="section3"
      >
        <p>header3</p>
      </AccordionHeader>
      <AccordionSection
        id="section3"
        ariaLabeledBy="header3"
        openSection={openSection}
      >
        <p>section3</p>
      </AccordionSection>
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
