import { Observable, Subscriber } from 'rxjs';

const source1$ = new Observable<string>((observer: Subscriber<string>) => {
    var v = 'a';
    var counter = setInterval(() => {
        observer.next(v);
        v += 'a';

        if (v.length > 10) {
            observer.complete();
            clearInterval(counter);
        }
    }, 500);
});

const source2$ = new Observable<number>((observer: Subscriber<number>) => {
    var v = 20;
    var counter = setInterval(() => {
        observer.next(v++)

        if (v > 23) {
            observer.complete();
            clearInterval(counter);
        }
    }, 1000);
});

// console.log('Subscribe A');
// source1$
// .subscribe(s => console.log('Observer A : ', s));

// console.log('Subscribe B');
// source2$
// .subscribe(s => console.log('Observer B : ', s));

console.log('Subscribe B');
source2$
.last()
.concat(source1$)
.subscribe(s => console.log('Observer B : ', s));

console.log('Subscribe C');
source1$
.combineLatest(source2$)
.subscribe(console.log);