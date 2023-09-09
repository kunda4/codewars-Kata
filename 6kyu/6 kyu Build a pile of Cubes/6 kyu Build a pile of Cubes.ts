/**
DESCRIPTION:
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 

 =m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1 
 */
export function findNb(m: number): number {
    // your code
    let sum:number = 0
    let n:number =1
    while(sum<m){
      sum+= Math.pow(n,3)
      if(sum===m){
        return n
      } 
      n++
    }
    return -1
  }