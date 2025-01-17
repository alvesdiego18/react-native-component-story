/* eslint-disable import/extensions */
const config = require("./jest.config");

module.exports = {
  ...config,
  testMatch: ["**/?(*.unit.)+(spec|test).[jt]s?(x)"],
};
