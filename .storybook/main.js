module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "storybook-readme",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
  },
}
