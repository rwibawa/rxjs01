const { Observable } = require('rxjs');
const source$ = Observable.create(obs => {
    obs.next(1);
    obs.next(2);
    obs.complete();
});

source$
.subscribe(console.log);
