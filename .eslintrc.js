module.exports = {
  root: true,
  extends: [
    "standard",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  plugins: ["vue"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
      }
    ]
  }
};
