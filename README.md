<h1 align="center">
   MM Mobile Tools - Typescript
</h1>

<p align="center">A npm package for working with Myanmar phone numbers</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/mm-mobile-tools.svg?style=flat-square)](https://www.npmjs.org/package/mm-phone)

[![Build status](https://img.shields.io/github/actions/workflow/status/lwinmoehein/mm-mobile-tools-typescript/npm-publish.yml?branch=main&label=CI&logo=github&style=flat-square)](https://github.com/lwinmoehein/mm-phone-typescript/actions/workflows/npm-publish.yml)
[![code coverage](https://img.shields.io/coveralls/mzabriskie/axios.svg?style=flat-square)](https://coveralls.io/r/lwinmoehein/mm-mobile-tools)
[![npm downloads](https://img.shields.io/npm/dm/mm-mobile-tools.svg?style=flat-square)](https://npm-stat.com/charts.html?package=mm-phone)

</div>

## Table of Contents

  - [Features](#features)
  - [Installing](#installing)
    - [Package manager](#package-manager)
  - [Examples](#examples)
  - [License](#license)
## Features

- Check if a phone number is a valid local ( Myanmar ) phone number 
- Get the operator from a phone number

## Installing

### Package manager

Using npm:

Once the package is installed, you can import the library using `import`: 

```js
import mmphone from 'mm-mobile-tools';
```

## Examples

### Check if phone number is valid

```js
import mmphone from 'mm-mobile-tools';

console.log(mmphone.isValidPhone("09440813577")); 
```
### Get operator

```js
import mmphone,{ MPT } from 'mm-mobile-tools';

if(mmphone.getOperator("09440813577")===MPT){
    console.log("Phone number is MPT"); 
}
```


## License

[MIT](LICENSE)
