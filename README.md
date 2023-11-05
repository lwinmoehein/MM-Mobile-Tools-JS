<h1 align="center">
   MM Phone - Typescript
</h1>

<p align="center">A npm package for working with Myanmar phone numbers</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/mm-phone)

[![Build status](https://img.shields.io/github/actions/workflow/status/lwinmoehein/mm-phone-typescript/npm-publish.yml?branch=main&label=CI&logo=github&style=flat-square)](https://github.com/lwinmoehein/mm-phone-typescript/actions/workflows/npm-publish.yml)
[![code coverage](https://img.shields.io/coveralls/mzabriskie/axios.svg?style=flat-square)](https://coveralls.io/r/lwinmoehein/mm-phone)
[![npm downloads](https://img.shields.io/npm/dm/axios.svg?style=flat-square)](https://npm-stat.com/charts.html?package=mm-phone)

</div>

## Table of Contents

  - [Features](#features)
  - [Installing](#installing)
    - [Package manager](#package-manager)
  - [License](#license)

## Features

- Check if a phone number is a valid local ( Myanmar ) phone number 
- Get the operator from a phone number

## Installing

### Package manager

Using npm:

```bash
$ npm install mm-phone
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import mmphone from 'mm-phone';

console.log(mmphone.isValidPhone('09440813533')); //true
```

If you want to use `require` for importing,

```js
const mmphone = require('mm-phone');

console.log(mmphone.isValidPhone('09440813533')); //true
```


## License

[MIT](LICENSE)
