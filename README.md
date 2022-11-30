# eslint-config

[![npm version](https://badge.fury.io/js/%40w0s%2Feslint-config.svg)](https://www.npmjs.com/package/@w0s/eslint-config)
[![test status](https://github.com/SaekiTominaga/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/SaekiTominaga/eslint-config/actions/workflows/test.yml)

ESLint configuration file used on [w0s.jp](https://w0s.jp/)

## `extends`

- [eslint:recommended](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#using-eslintrecommended)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [plugin:@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) (TypeScript file only)

## `plugins`

- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)

## Usage

```json
{
  "extends": ["@w0s/eslint-config"]
}
```
