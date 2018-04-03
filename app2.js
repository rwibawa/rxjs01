const { Observable, pipe } = require('rxjs/Rx');
const { filter, map, reduce } = require('rxjs/operators');

const filterOutEven = filter(x => !(x % 2));
const doubleBy = map(x => x * 2);
const sum = reduce((acc, value) => acc + value, 0);

const source$ = Observable.range(0, 10);
source$
.pipe(filterOutEven, doubleBy, sum)
.subscribe(console.log);