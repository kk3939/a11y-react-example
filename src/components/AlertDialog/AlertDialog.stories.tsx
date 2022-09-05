import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertDialog } from ".";
import readme from "./README.md";

export default {
  title: "AlertDialog",
  component: AlertDialog,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as ComponentMeta<typeof AlertDialog>;

export const Base: ComponentStory<typeof AlertDialog> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        id="trigger-alert"
        onClick={() => setOpen(true)}
        style={{ marginBottom: "5px" }}
      >
        trigger Alert
      </button>
      <AlertDialog open={open} setOpen={setOpen} />
    </div>
  );
};
