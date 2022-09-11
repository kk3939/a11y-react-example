import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ToggleButton } from ".";
import readme from "./README.md";

export default {
  title: "ToggleButton",
  component: ToggleButton,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as ComponentMeta<typeof ToggleButton>;

export const Base: ComponentStory<typeof ToggleButton> = () => {
  const [on, setOn] = useState(false);
  return <ToggleButton on={on} setOn={setOn} />;
};
