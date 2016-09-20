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

var name = new Datumbase('Everett'); // insert value

name.set('Kirby'); // update a value
name.get(); // read a value
// → 'Kirby'

name.remove(); // delete a value
name.get();
// → undefinded
```

## Webserver Example

This example exists at `example/webserver.js`.

It can be ran by running `npm start`.

```javascript
var Datumbase = require('../datumbase.js');
var http = require('http');

var name = new Datumbase('Kirby Kohlmorgen');

var server = http.createServer(function(req, res) {
  res.end(name.get());
});

server.listen(8080, function() {
  console.log('Server listening on port 8080.');
});
```
