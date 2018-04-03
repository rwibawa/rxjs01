const { Observable } = require('rxjs');

// for (var i=0; i<10; i++) {}
const source$ = Observable.range(0, 10);

source$
// .filter(x => !(x % 2))
// .map(x => x * 2)
// .reduce((acc, value) => acc + value, 0)
.subscribe(console.log);