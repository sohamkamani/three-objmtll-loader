# three-objmtll-loader [![Build Status](https://travis-ci.org/sohamkamani/three-objmtll-loader.svg?branch=master)](https://travis-ci.org/sohamkamani/three-objmtll-loader)

> NodeJS wrapper for Three.js' OBJMTLLLoader function

By default, [Three.js](https://www.npmjs.com/package/three) does not have [OBJMTLLLoader](http://threejs.org/docs/#Reference/Loaders/OBJMTLLoader) built in. This is a NodeJS wrapper for the OBJLoader library so that it can be used with npm in systems using browserify, webpack, etc. All credit for the original code goes to mrdoob and angelxuanchang.

## Install

```
$ npm install --save three-objmtll-loader
```

## Usage

```js
var THREE = require('three');
var OBJMTLLoader = require('three-objmtll-loader');
OBJMTLLoader(THREE);

console.log(typeof THREE.OBJMTLLoader);
//=> 'function'
```

## License

MIT © [sohamkamani](https://github.com/sohamkamani)
