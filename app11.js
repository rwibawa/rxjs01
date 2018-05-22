const { Observable } = require('rxjs');

// for (var i=0; i<10; i++) {}
const source$ = Observable.range(0, 10);
source$
.map(() => state => Object.assign({}, state, {count: state.count + 1}))
.reduce((state, changeFn) => changeFn(state), {
    count: 0,
    inputValue: ''
})
.subscribe(console.log);