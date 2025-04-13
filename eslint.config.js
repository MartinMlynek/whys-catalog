import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";
import pluginQuery from "@tanstack/eslint-plugin-query";
import importPlugin from "eslint-plugin-import";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      ...pluginQuery.configs["flat/recommended"],
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...pluginRouter.configs["flat/recommended"],
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-x": reactX,
      "react-dom": reactDom,
      "@tanstack/query": pluginQuery,
      import: importPlugin,
      "@tanstack/router": pluginRouter,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          allowExpressions: true,
        },
      ],
      "import/order": [
        "error",
        {
          distinctGroup: false,
          groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
          },
          pathGroups: [
            {
              pattern: "../**/*.sass",
              group: "object",
            },
            {
              pattern: "./**/*.sass",
              group: "object",
            },
            {
              pattern: "**/*.sass",
              group: "object",
            },
            {
              pattern: "../**/*.{jpg,jpeg,png,gif,svg,ico}",
              group: "type",
            },
            {
              pattern: "./**/*.{jpg,jpeg,png,gif,svg,ico}",
              group: "type",
            },
            {
              pattern: "**/*.{jpg,jpeg,png,gif,svg,ico}",
              group: "type",
            },
          ],
        },
      ],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "react-hooks/exhaustive-deps": "error",
      "max-len": [
        "error",
        {
          code: 120,
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
      ...reactX.configs["recommended-typescript"].rules,
      ...reactDom.configs.recommended.rules,
    },
  }
);
