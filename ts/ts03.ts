import { Observable } from 'rxjs';

const observable$ = Observable.of('a', 'b', 'c');
observable$
.concat()
.subscribe(console.log);