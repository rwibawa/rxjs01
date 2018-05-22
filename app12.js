const { Observable } = require('rxjs');

// increase
const source1$ = Observable.range(0, 10)
.map(() => state => Object.assign({}, state, {count: state.count + 1}));

// decrease
const source2$ = Observable.range(0, 10)
.map(() => state => Object.assign({}, state, {count: state.count - 1}));

// map events to produce an inputValue state
const source3$ = Observable.from(['a', 'b', 'c'])
.map(value => state => Object.assign({}, state, {inputValue: value}));

const state = Observable.merge(
    source1$,
    source2$,
    source3$
)
.scan((state, changeFn) => changeFn(state), {
    count: 0,
    inputValue: ''
})
.subscribe(console.log);