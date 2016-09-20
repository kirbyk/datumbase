'use strict';

function Datumbase(datum) {
  this.datum = datum;
};

Datumbase.prototype.set = function(datum) {
  if (!this.datum && this.datum !== false && this.datum !== NaN) {
    throw "Can't set nothing!";
  }
  return this.datum = datum;
};

Datumbase.prototype.get = function() {
  if (!this.datum && this.datum !== false && this.datum !== NaN) {
    throw "Can't get nothing!";
  }
  return this.datum;
}

Datumbase.prototype.remove = function() {
  return this.datum = undefined;
}

module.exports = Datumbase;
