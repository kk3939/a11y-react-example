import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Breadcrumb } from ".";
import readme from "./README.md";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as ComponentMeta<typeof Breadcrumb>;

export const Base: ComponentStory<typeof Breadcrumb> = () => {
  const pages = [
    {
      link: "https://www.google.com/",
      name: "page 1",
      isCurrent: false,
    },
    {
      link: "https://www.google.com/",
      name: "page 2",
      isCurrent: false,
    },
    {
      link: "https://www.google.com/",
      name: "page 3",
      isCurrent: true,
    },
  ];
  return <Breadcrumb pages={pages} />;
};
