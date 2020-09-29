// Welcome to your eatsa coding challenge!
//
// Find the length of the longest substring in a string without repeating characters
// Examples:
// "abcaba" would be 3, "abc" or "bca" or "cab"
// "aabbcd" would be 3, "bcd"
// "aaaa" would be 1, "a"
// "abac" would be 3, "bac"
// "adbace" would be 3, "dbace"

var str = 'abac';
console.log(str);

var result =
  str.split('')
/*
  .reduce((acc, cur) => {
    var [head, ...tail] = acc
  }, []);
*/

  .reduce((acc, cur, i, arr) => {
    let index = acc.indexOf(cur);
    
    if (index > -1) {
      arr.splice(1);
    }
   
  // console.log(cur, index);
   if (index == -1) acc.push(cur);
  
    return acc;
  }, []);


console.log(result, 'length', result.length);

var result =
  str.split('')
  .reduce((acc, cur, i, arr) => {
    let index = acc.indexOf(cur);
    
    if (index > -1) {
//      console.log('arr', arr);
//      console.log('acc', acc);
      collections.push(acc.join());
//      console.log('end', i+1);
      return arr.slice(index+1, i+1);
    }
   
    console.log('acc', acc);
   acc.push(cur);
  
    return acc;
  }, []);
