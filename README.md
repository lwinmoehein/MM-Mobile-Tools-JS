<h1 align="center">
   MM Mobile Tools - Javascript
</h1>

<p align="center">A npm package for working with Myanmar phone numbers</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/mm-mobile-tool.svg?style=flat-square)](https://www.npmjs.org/package/mm-mobile-tool)
![Build status](https://github.com/lwinmoehein/MM-Mobiile-Tools-JS/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/lwinmoehein/MM-Mobile-Tools-JS/graph/badge.svg?token=YVS9A98YJQ)](https://codecov.io/gh/lwinmoehein/MM-Mobile-Tools-JS)
[![npm downloads](https://img.shields.io/npm/dm/mm-mobile-tool.svg?style=flat-square)](https://npm-stat.com/charts.html?package=mm-mobile-tool)

</div>

> currently only supports ES modules

## Table of Contents

  - [Features](#features)
  - [Installing](#installing)
    - [Package manager](#package-manager)
  - [Examples](#examples)
  - [License](#license)
## Features

- Check if a phone number is a valid Myanmar phone number 
- Get the operator from a phone number

## Installing

### Package manager

Using npm:

```bash
$ npm install mm-mobile-tool 
```

Once the package is installed, you can import the library using `import`: 

```js
import mmphone from 'mm-mobile-tool';
```

## Examples

### Check if phone number is valid

```js
import mmphone from 'mm-mobile-tool';

if(mmphone.isValid("09440813577")){
    console.log("Phone number is valid");
}
```
### Get operator

```js
import mmphone,{ Operator } from 'mm-mobile-tool';

if(mmphone.getOperator("09440813577")===Operator.MPT){
    console.log("Phone number is MPT"); 
}
```

### Operator types

- MPT = Operator.MPT
- Ooredoo = Operator.OOREDOO
- ATOM = Operator.ATOM
- MECTel = Operator.MECTEL
- MyTel = Operator.MYTEL

## License

[MIT](LICENSE)
