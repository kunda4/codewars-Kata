/**
DESCRIPTION:
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
 */

export function powersOfTwo(n:number):number[]{
    let myArr: number[] = []
    for(let num=0; num<=n; num++){
      myArr.push(Math.pow(2,num))
    }
      
   return myArr
 }