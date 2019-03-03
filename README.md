# uinames for NodeJS

A simple module to generate random localized names using uinames (http://uinames.com) as the source

## Installation

```shell
$ npm install uinames --save
```

## Usage
```js
var uinames = require('uinames');

uinames({
  country: 'Colombia',
  amount: 1
}, function (err, data) {
  if (err) {
    return console.error(err);
  }
  //data is an array of objects and contains 1 object with these properties: 
  //firstName (random Colombian first name), lastName (random Colombian surname), gender (is random) and country (is Colombia)
  console.log(data);
});

uinames({
  country: 'United States',
  amount: 10,
  gender: 'female'
}, function (err, data) {
  if (err) {
    return console.error(err);
  }
  //data is an array of 10 objects, every object hast the same properties: 
  //firstName (random female name), lastName (random surname), gender (female for all of them) and country (United States for all of them)
  console.log(data);
});
```

## Credits
[Adrián Estrada](https://github.com/edsadr/)

### The MIT License

Copyright (c) 2015 Adrián Estrada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
