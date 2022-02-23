import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { Page } from "./Page";

const meta: ComponentMeta<typeof Page> = {
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};
export default meta;

export const LoggedOut: ComponentStoryObj<typeof Page> = {};

export const LoggedIn: ComponentStoryObj<typeof Page> = {
  // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    userEvent.click(loginButton);
  },
};
