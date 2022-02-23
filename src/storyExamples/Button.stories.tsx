import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: ComponentMeta<typeof Button> = {
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
export default meta;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: ComponentStoryObj<typeof Button> = {
  args: { primary: true, label: "Button" },
};

export const Secondary: ComponentStoryObj<typeof Button> = {
  args: {
    label: "Button",
  },
};

export const Large: ComponentStoryObj<typeof Button> = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: ComponentStoryObj<typeof Button> = {
  args: {
    size: "small",
    label: "Button",
  },
};
