module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
};
