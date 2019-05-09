const genDefaultConfig = require('../default.default.webpack.config.js');

module.exports = {
  ...genDefaultConfig,
  mode: "development"
};
