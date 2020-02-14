const fs = require("fs");
const { Webpack } = require("xdl");

Webpack.startAsync(
  fs.realpathSync(process.cwd()),
  { nonInteractive: process.stdout.isTTY },
  true
);
