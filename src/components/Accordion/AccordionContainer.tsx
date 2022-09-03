import React, { useState } from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionSection } from "./AccordionSection";

type Props = {
  contentNum: "1" | "2" | "3";
};

export const AccordionContainer: React.FC<Props> = ({ contentNum }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <AccordionHeader
        contentNum={contentNum}
        setOpened={setOpened}
        opened={opened}
      />
      <AccordionSection contentNum={contentNum} opened={opened} />
    </div>
  );
};
