// Add length
// DESCRIPTION:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

//solution will be here
function addLength(str) {
  //start-here
  let newArr = [];
  let leng = 1;

  const splitNum = str.split(" ");
  for (let w of splitNum) {
    leng = w.length;
    newArr.push(w.concat(" ", leng));
  }
  return newArr;
}
// new way
function addLength(str) {
  return str.split(" ").map((s) => `${s} ${s.length}`);
}
//new way
var addLength = (s) => s.split(" ").map((x) => x + " " + x.length);

//new way
function addLength(str) {
  return str.split(" ").map(function (v) {
    return v + " " + v.length;
  });
}
