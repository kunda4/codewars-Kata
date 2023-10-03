/**
DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

// complete the function
function solution(string) {
  let myArr = [];
  let myStr = string.split("");
  myStr.map((char) => {
    if (char == char.toUpperCase()) {
      myArr.push(" ");
    }
    myArr.push(char);
  });
  return myArr.join("");
}
