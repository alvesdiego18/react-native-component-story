module.exports = {
  root: true,
  extends: [
    "@react-native",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-unused-vars": "off",
    quotes: ["error", "double"],

    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",

    "react-native/no-color-literals": "off",
    "react-native/no-inline-styles": "off",
    "react-native/no-raw-text": "off",

    "react/no-unstable-nested-components": "off",
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    "react-native/react-native": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/", "dist/", "coverage/", "*.js"],
};
