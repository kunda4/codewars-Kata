function stringsConstruction(A = "", B = "") {
  const myObj = {};
  B.split("").forEach((element) => {
    if (A.includes(element)) {
      if (myObj.hasOwnProperty(element)) {
        myObj[element] += 1;
      } else {
        myObj[element] = 1;
      }
    }
  });
  if (!A.split("").every((el) => myObj.hasOwnProperty(el))) return 0;
  console.log(myObj);
  const myArr = [];
  for (let i in myObj) {
    let occ = A.split("").filter((el) => el == i).length;
    myArr.push(Math.floor(myObj[i] / occ));
  }
  console.log(myArr);
  return myArr.length ? Math.min(...myArr) : 0;
}
console.log(stringsConstruction("vnyiaep", "vyappavapbip"));
console.log(
  stringsConstruction(
    "hnccv",
    "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"
  )
);
