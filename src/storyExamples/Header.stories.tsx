import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta: ComponentMeta<typeof Header> = {
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};
export default meta;

export const LoggedIn: ComponentStoryObj<typeof Header> = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: ComponentStoryObj<typeof Header> = {};
