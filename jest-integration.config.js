/* eslint-disable import/extensions */
const config = require("./jest.config");

module.exports = {
  ...config,
  testMatch: ["**/?(*.integration.)+(spec|test).[jt]s?(x)"],
};
