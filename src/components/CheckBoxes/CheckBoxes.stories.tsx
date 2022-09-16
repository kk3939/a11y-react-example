import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheckBoxes } from ".";
import readme from "./README.md";

export default {
  title: "CheckBoxes",
  component: CheckBoxes,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as ComponentMeta<typeof CheckBoxes>;

export const Base: ComponentStory<typeof CheckBoxes> = () => {
  const [names, setNames] = useState([
    { checked: true, text: "KYOSUKE" },
    { checked: true, text: "YU" },
    { checked: true, text: "MAI" },
  ]);
  return <CheckBoxes checkBoxes={names} onClick={setNames} />;
};
