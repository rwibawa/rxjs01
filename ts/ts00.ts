import { Subject } from 'rxjs';
const subject$ = new Subject<string>();

subject$
.filter(w => w.length > 2)
.subscribe(console.log);

subject$
.subscribe(w => console.log('another logger', w));

subject$.next('ab');
subject$.next('abc');
subject$.next('abcd');