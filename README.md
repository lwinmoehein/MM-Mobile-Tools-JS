<h1 align="center">
   MM Mobile Tools - Javascript
</h1>

<p align="center">A npm package for working with Myanmar phone numbers</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/mm-mobile-tools.svg?style=flat-square)](https://www.npmjs.org/package/mm-mobile-tools)
![Build status](https://github.com/lwinmoehein/MM-Mobiile-Tools-JS/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/lwinmoehein/MM-Mobile-Tools-JS/graph/badge.svg?token=YVS9A98YJQ)](https://codecov.io/gh/lwinmoehein/MM-Mobile-Tools-JS)
[![npm downloads](https://img.shields.io/npm/dm/mm-mobile-tools.svg?style=flat-square)](https://npm-stat.com/charts.html?package=mm-mobile-tools)

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
import mmphone,{ Operator } from 'mm-mobile-tools';

if(mmphone.getOperator("09440813577")===Operator.MPT){
    console.log("Phone number is MPT"); 
}
```


## License

[MIT](LICENSE)
