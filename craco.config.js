const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure(config) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "settings",
          library: { type: "var", name: "settings" },
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/App",
          },
        })
      );
      return config;
    },
  },
};
