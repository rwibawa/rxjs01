const words = [ "lorem", "ipsum", "dolor", "lorem", "ipsum", "lorem", "lorem" ];
// words.forEach(console.log);
// words.map(s => ({ [s]: 1})).forEach(i => console.log(i));
const result = words
.reduce((acc, entry) => {
    acc[entry] = acc[entry] ? acc[entry] + 1 : 1;
    return acc;
}, {});
console.log(result);

const wordCount = {
    "lorem": 2,
    "ipsum": 2,
    "dolor": 1
};

const entry = { "ipsum": 1 };
// Object.keys(wordCount).forEach(console.log);
// console.log(wordCount["ipsum"], entry["ipsum"]);
// console.log(wordCount["amet"] == undefined);

wordCount["ipsum"] = 3;
// console.log(wordCount["ipsum"]);