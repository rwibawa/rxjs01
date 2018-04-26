"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var source$ = rxjs_1.Observable.range(0, 10);
console.log('Subscribe A');
source$
    .subscribe(function (s) { return console.log('Observer A : ', s); });
console.log('Subscribe B');
source$
    .subscribe(function (s) { return console.log('Observer B : ', s); });
