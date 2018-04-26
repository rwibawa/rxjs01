"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var source1$ = new rxjs_1.Observable(function (observer) {
    var v = 'a';
    var counter = setInterval(function () {
        observer.next(v);
        v += 'a';
        if (v.length > 10) {
            observer.complete();
            clearInterval(counter);
        }
    }, 500);
});
var source2$ = new rxjs_1.Observable(function (observer) {
    var v = 20;
    var counter = setInterval(function () {
        observer.next(v++);
        if (v > 23) {
            observer.complete();
            clearInterval(counter);
        }
    }, 1000);
});
// console.log('Subscribe A');
// source1$
// .subscribe(s => console.log('Observer A : ', s));
// console.log('Subscribe B');
// source2$
// .subscribe(s => console.log('Observer B : ', s));
console.log('Subscribe B');
source2$
    .last()
    .concat(source1$)
    .subscribe(function (s) { return console.log('Observer B : ', s); });
console.log('Subscribe C');
source1$
    .combineLatest(source2$)
    .subscribe(console.log);
