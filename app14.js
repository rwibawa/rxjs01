// async/await loop
// reduce version
async function fizz(arr) {
    await arr.reduce((p, e, i) => p.then(async () => {
        await foo(e);
    }), Promise.resolve());
    console.log('done');
}

function foo(x) {
    // some awaitable func
    return new Promise(r => setTimeout(
        () => r(console.log('foo', x)),
        2000
    ));
}

fizz([1, 2, 3]); // invoke