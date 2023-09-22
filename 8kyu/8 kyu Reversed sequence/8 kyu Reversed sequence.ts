/**
DESCRIPTION:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
 */

export const reverseSeq = (n: number): number[] => {
  
    let myArr:number[] = []
    while(n>0){
      myArr.push(n)
         n--
    }
    return myArr
    
  };