import { Observable } from 'rxjs';

const source$ = Observable.range(0,10);

console.log('Subscribe A');
source$
.subscribe(s => console.log('Observer A : ', s));

console.log('Subscribe B');
source$
.subscribe(s => console.log('Observer B : ', s));