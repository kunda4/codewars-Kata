/*
DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 

*/

function squareSum(numbers) {
  // console.log(numbers)
  let sum = 0;
  newArr = [];
  for (let i of numbers) {
    i = i * i;
    newArr.push(i);
    console.log(newArr);
  }
  for (let n of newArr) {
    sum = sum + n;
  }
  return sum;
}
