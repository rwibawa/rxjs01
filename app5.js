const { Observable } = require('rxjs');
const source$ = Observable.create(obs => {
    var id = setInterval(() => obs.next(1), 100);
});

source$
.subscribe(console.log);
