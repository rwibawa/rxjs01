"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var subject$ = new rxjs_1.Subject();
subject$
    .filter(function (w) { return w.length > 2; })
    .subscribe(console.log);
subject$
    .subscribe(function (w) { return console.log('another logger', w); });
subject$.next('ab');
subject$.next('abc');
subject$.next('abcd');
