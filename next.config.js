const { withSentryConfig } = require("@sentry/nextjs");
const withAntdLess = require("next-plugin-antd-less");

const moduleExports = withAntdLess({
  lessVarsFilePath: "./src/styles/variables.less",

  webpack(config) {
    return config;
  },
});

module.exports = withSentryConfig(moduleExports, {});
