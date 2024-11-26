import globals from "globals";
import pluginJs from "@eslint/js";
import xo from "eslint-config-xo";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...xo,
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    rules: {
      // Make ESLint and Prettier play nice with each other
      "@stylistic/indent": "off",
      "@stylistic/quotes": "off",
      "@stylistic/arrow-parens": "off",
      "@stylistic/object-curly-spacing": "off",
      "@stylistic/function-paren-newline": "off",
      "@stylistic/object-curly-newline": "off",
      "@stylistic/operator-linebreak": "off",
    },
  },
];
