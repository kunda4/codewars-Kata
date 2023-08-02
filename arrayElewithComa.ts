/*
Input: Array of elements
["h","o","l","a"]
Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
**/


export function printArray(array:any[]){
    // show me the code!
    return array.join(",")
  }

  //Other way
  export function printArrayy(array:Number[]|string[]|object[]|boolean[]){
    // show me the code!
    let newArr:string =array.toString()
    return newArr
  }