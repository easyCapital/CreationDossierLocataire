const { withSentryConfig } = require("@sentry/nextjs");
const withAntdLess = require("next-plugin-antd-less");

const moduleExports = withAntdLess({
  lessVarsFilePath: "./src/styles/variables.less",
  env: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },

  webpack(config) {
    return config;
  },
});

module.exports = withSentryConfig(moduleExports, {});
