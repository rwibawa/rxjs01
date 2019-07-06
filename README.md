# rxjs01
Learn rxjs/Observables and nodejs stream.

## 1. Setup
```sh
$ mkdir rxjs01
$ cd mkdir rxjs01

$ npm init
$ npm i -S rxjs

# typescript compiler
$ npm i typescript -g
```

## 2. run the exercise codes
```sh
$ node app1.js

$ cd ts
$ tsc ts00.ts
$ node ts00.js
```

## 3. exercise with integer array:
```sh
$ node
Welcome to Node.js v12.6.0.
Type ".help" for more information.
> var a2 = [...Array(10).keys()];
undefined
> a2
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
> a2.filter(x => !(x % 2))
[ 0, 2, 4, 6, 8 ]
> a2.filter(x => !(x % 2)).map(x => x * 2)
[ 0, 4, 8, 12, 16 ]
> a2.filter(x => !(x % 2)).map(x => x * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
40
> a2.filter(x => !(x % 2)).map(x => x * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 1)
41

> const words = [ "lorem", "ipsum", "dolor", "lorem", "ipsum", "lorem", "lorem" ];
> .editor
// Entering editor mode (^D to finish, ^C to cancel)
words
.reduce((acc, entry) => {
    acc[entry] = acc[entry] ? acc[entry] + 1 : 1;
    return acc;
}, {});
{ lorem: 4, ipsum: 2, dolor: 1 }

> .editor
// Entering editor mode (^D to finish, ^C to cancel)
a2
.map(() => state => Object.assign({}, state, {count: state.count + 1}))
.reduce((state, changeFn) => changeFn(state), {
    count: 0,
    inputValue: ''
})
{ count: 10, inputValue: '' }
> 
```