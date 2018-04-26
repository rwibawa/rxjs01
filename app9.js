const { Observable } = require('rxjs');

const source$ = new Observable(obs => 
    setInterval(() => obs.next(new Date().toString()), 1000)
);

source$
.subscribe(console.log);