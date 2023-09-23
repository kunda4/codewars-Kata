/**
Task
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

If you forgot how to push an element to an array, please refer to lesson 4.
 */

function pickIt(arr) {
  let odd = [],
    even = [];
  for (let num of arr) {
    if (num % 2) {
      odd.push(num);
    } else if (num % 2 === 0) {
      even.push(num);
    }
  }

  return [odd, even];
}
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));
