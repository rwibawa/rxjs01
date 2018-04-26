"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observable$ = rxjs_1.Observable.of('a', 'b', 'c');
observable$
    .concat()
    .subscribe(console.log);
