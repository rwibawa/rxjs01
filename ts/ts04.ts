import { Observable, Subscriber } from 'rxjs';

const source$ = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().getTime().toString()), 1000);
});

console.log('Subscribe A');
source$
.subscribe(s => console.log('Observer A : ', s));

console.log('Subscribe B');
source$
.subscribe(s => console.log('Observer B : ', s));