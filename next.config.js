const { withSentryConfig } = require("@sentry/nextjs");
const withAntdLess = require("next-plugin-antd-less");

const moduleExports = withAntdLess({
  lessVarsFilePath: "./src/styles/variables.less",
  env: {
    API_URL: process.env.API_URL,
  },

  webpack(config) {
    return config;
  },
});

module.exports = withSentryConfig(moduleExports, {});
