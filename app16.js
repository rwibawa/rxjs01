// WelformedParentheses

var str = '(())))())';
console.log('str', str);

function isWelformedParentheses(str) {
  let counter = str.split('')
  .reduce((counter, val, i, arr) => {
    if (val === '(') counter++;
    if (val === ')') {
      if (counter == 0) arr.splice(1);
      counter--;
    }
    
    return counter;
  }, 0);

  return counter == 0;
}
  
console.log(isWelformedParentheses(str));