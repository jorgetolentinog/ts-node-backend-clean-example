const { pathsToModuleNameMapper } = require("ts-jest");
const { jsWithTs } = require("ts-jest/presets");
const { compilerOptions } = require("./tsconfig");

process.env.STAGE = "test";

module.exports = {
  collectCoverageFrom: ["src/**"],
  transform: jsWithTs.transform,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: __dirname,
  }),
};
