# Cilantro

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
import cilantro from 'cilantro';

cilantro('examples/csv-data', 'examples/csv-data').transform('csv', 'json');
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
