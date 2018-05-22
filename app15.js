// async/await loop

function delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
}

async function delayedLog(item) {
    // notice that we can await a function that returns promise
    await delay();
    // log item only after a delay
    console.log(item);
}

async function processArray(array) {
    // map array to promise
    const promises = array.map(delayedLog);
    // wait until all promises are resolved
    await Promise.all(promises)
    console.log('Done!');
}

processArray([1, 2, 3]);