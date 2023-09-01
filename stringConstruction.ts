/**
Task
How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

Example
For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.

Input/Output
[input] string A

String to construct, A contains only lowercase English letters.

Constraints: 3 ≤ A.length ≤ 9.

[input] string B

String containing needed letters, B contains only lowercase English letters.

Constraints: 3 ≤ B.length ≤ 50.

[output] an integer
 */

export function stringsConstruction(A: string, B: string): number {
    const myObj:any = {};
    B.split("").forEach((element) => {
      if (A.includes(element)) {
        if (myObj.hasOwnProperty(element)) {
          myObj[element] += 1;
        } else {
          myObj[element] = 1;
        }
      }
    });
    const myArr = [];
    if (!A.split("").every((el) => myObj.hasOwnProperty(el))) return 0;
    for (let i in myObj) {
      let occ = A.split("").filter((el) => el == i).length;
    //   myArr.push(Math.floor(myObj[i] / occ));
    }
    return myArr.length ? Math.min(...myArr) : 0
  }