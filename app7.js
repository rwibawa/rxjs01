const { Subject } = require('rxjs');
const subject$ = new Subject();

subject$.subscribe(console.log);

subject$.next('ab');
subject$.next('abc');
subject$.next('abcd');