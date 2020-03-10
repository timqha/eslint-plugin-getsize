# eslint-plugin-getsize

simple plugin for react-native get size for different screen sizes.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-getsize`:

```
$ npm install eslint-plugin-getsize --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-getsize` globally.

## Usage

Add `getsize` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "getsize"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "getsize/need-get-font-size-scale-factor": 2
    }
}
```

## Supported Rules

* Fill in provided rules here

    - need-get-font-size-scale-factor - checks that all font sizes are with scale factor.
