const { Observable } = require('rxjs');
const { from } = require('rxjs/operators');
const source$ = Observable.from([1,2,3]);
source$
.subscribe(console.log);
