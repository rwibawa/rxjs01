"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var source$ = new rxjs_1.Observable(function (observer) {
    setInterval(function () { return observer.next(new Date().getTime().toString()); }, 1000);
});
console.log('Subscribe A');
source$
    .subscribe(function (s) { return console.log('Observer A : ', s); });
console.log('Subscribe B');
source$
    .subscribe(function (s) { return console.log('Observer B : ', s); });
