const fs = require("fs");
const { Webpack } = require("xdl");

Webpack.bundleAsync(fs.realpathSync(process.cwd()), {
  dev: false,
  polyfill: false,
  pwa: false
});
