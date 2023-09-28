export function positiveSum(arr:number[]):number {
    return arr.filter(el=> el>=0).reduce((acc, curr)=> acc+curr, 0);
  }