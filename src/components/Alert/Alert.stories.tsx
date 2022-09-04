import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Alert } from ".";
import readme from "./README.md";

export default {
  title: "Alert",
  component: Alert,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as ComponentMeta<typeof Alert>;

export const Base: ComponentStory<typeof Alert> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        id="trigger"
        onClick={() => setOpen(true)}
        style={{ marginBottom: "5px" }}
      >
        trigger Alert
      </button>
      <Alert open={open}>
        <p>alert</p>
      </Alert>
    </div>
  );
};
