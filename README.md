# eslint-plugin-wxmp

微信小程序eslint插件

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-wxmp`:

```sh
npm install eslint-plugin-wxmp --save-dev
```

## Usage

Add `wxmp` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "wxmp"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "wxmp/disable-wx-api": [
      2,
      {
        "list": ["setTopBarText", "nextTick"]
      }
    ]
  }
}
```

## Supported Rules

* Fill in provided rules here
