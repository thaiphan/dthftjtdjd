const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure(config) {
      config.output.publicPath = process.env.REACT_APP_PUBLIC_PATH;
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "settings",
          filename: "remoteEntry.js",
          exposes: {
            "./App": "./src/App",
          },
          shared:
            process.env.NODE_ENV === "production" ? ["react", "react-dom"] : [],
        })
      );
      return config;
    },
  },
};
