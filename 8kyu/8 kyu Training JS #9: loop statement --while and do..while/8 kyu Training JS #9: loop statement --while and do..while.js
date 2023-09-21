/**
Task
Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
 */

function padIt(str, n) {
  let star = "*";
  while (n > 0) {
    if (n % 2 === 0) {
      return `${star.repeat(n / 2)}${str}${star.repeat(n / 2)}`;
    }
    return `${star.repeat(Math.ceil(n / 2))}${str}${star.repeat(
      Math.trunc(n / 2)
    )}`;
  }
}
