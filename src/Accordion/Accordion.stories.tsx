import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Accordion } from "./Accordion";
import readme from "./README.md";

export default {
  title: "Accordion",
  component: Accordion,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as ComponentMeta<typeof Accordion>;

export const Base: ComponentStory<typeof Accordion> = () => {
  return <Accordion />;
};
