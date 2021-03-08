module.exports = function reverse (n) {
    if (n < 0) {
        n = Math.abs(n);
    }
  let str = String(n); 
  let arr = str.split('');
  let reversedArr = arr.reverse(); 
  let reversedStr = reversedArr.join(''); 
  let reversedNumber = Number(reversedStr);  
  return reversedNumber;
}
