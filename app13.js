const { Observable } = require('rxjs');

const observable = Observable.forkJoin(
    Observable.interval(1000).take(3), // emit 0, 1, 2 every second and complete
    Observable.interval(500).take(4), // emit 0, 1, 2, 3 every half a second and complete
    (m, n) => m + n
);

observable.subscribe(
    value => console.log(value),
    err => {},
    () => console.log('This is how it ends')
);

// Logs:
// 5 after 3 seconds
// "This is how it ends!" immediately after