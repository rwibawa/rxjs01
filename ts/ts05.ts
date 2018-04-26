import { Subject, Subscriber } from 'rxjs';

const source$ = new Subject<string>();

console.log('Subscribe A');
source$
.subscribe(s => console.log('Observer A : ', s));

setInterval(() => source$.next(new Date().getTime().toString()), 1000);

console.log('Subscribe B');
source$
.subscribe(s => console.log('Observer B : ', s));