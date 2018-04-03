"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// Create simple observable that emits three values
var myObservable$ = rxjs_1.Observable.of([
    'abc',
    'de',
    'fghi'
]);
myObservable$.subscribe(function (words) {
    console.log(words);
    var lenghts = words.map(function (w) { return w.length; });
    console.log(lenghts);
});
