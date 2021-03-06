# Cilantro

[![Greenkeeper badge](https://badges.greenkeeper.io/frankrobert/cilantrojs.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/6ac95659ce7bcadfbb77/maintainability)](https://codeclimate.com/github/frankrobert/cilantrojs/maintainability)
[![build status](https://img.shields.io/travis/frankrobert/cilantrojs.svg)](https://travis-ci.org/frankrobert/cilantrojs)

[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/frankrobert/cilantrojs.svg)](LICENSE)

> Data parsing utility library for NodeJS.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Supported Transforms](#supported-transforms)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install cilantrojs
```

[yarn][]:

```sh
yarn add cilantrojs
```


## Usage

```js
import cilantro from 'cilantrojs';

const input = 'examples/csv-data';
const output = 'examples/csv-data';

cilantro({ input, output }).transform('csv', 'json');
```


## Supported Transforms

| From   |    To   |
| ------ | :-----: |
| `.csv` | `.json` |


## Contributors

| Name             |
| ---------------- |
| **Frank Robert** |


## License

[MIT](LICENSE) © Frank Robert


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
