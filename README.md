# datumbase

Like a database, but for only one datum.

> **da·tum** **•** /ˈdātəm,ˈdatəm/ **•** *noun*
>
> a piece of information.
> Singular of data.

## Installation

```bash
$ npm install datumbase
```

## Usage

```javascript
var Datumbase = require('../datumbase.js');

var name = new Datumbase;

name.set('Kirby');
name.get();
// → 'Kirby'
```
