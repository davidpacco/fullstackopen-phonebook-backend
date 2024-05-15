import globals from "globals";
import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin-js"


export default [
  {
    files: ["**/*.js"],
    plugins: {
      stylistic
    },
    languageOptions: {
      sourceType: "commonjs"
    },
    rules: {
      indent: ['error', 2],
      "linebreak-style": ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-console': 0
    }
  },
  {
    languageOptions: {
      globals: globals.node
    }
  },
  {
    ignores: ["dist"]
  },
  pluginJs.configs.recommended,
];