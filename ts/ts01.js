"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// Create simple observable that emits three values
var myObservable = rxjs_1.Observable.of(1, 2, 3);
// Create observer object
var myObserver = {
    next: function (x) { return console.log('Observer got a next value: ' + x); },
    error: function (err) { return console.error('Observer got an error: ' + err); },
    complete: function () { return console.log('Observer got a complete notification'); }
};
// Execute with the observer object
myObservable.subscribe(myObserver);
