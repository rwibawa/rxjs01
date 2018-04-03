import { Observable } from 'rxjs';

// Create simple observable that emits three values
const myObservable$ = Observable.of<string[]>([
    'abc',
    'de',
    'fghi'
]);

myObservable$.subscribe(words => {
    console.log(words);
    let lenghts = words.map(w => w.length);
    console.log(lenghts);
});