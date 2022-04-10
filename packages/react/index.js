module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@qianxi0410/eslint-config-ts",
  ],
  settings: {
    react: {
      version: "18.0",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
