const withImages = require("next-images");
module.exports = withImages({});

module.exports = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./src"],
      prependData: `@import "/src/styles/variables.scss";`,
    };
  }
  return defaultConfig;
};
