export function between(a: number, b: number): number[] {
    let myArr = []
  while(a<=b){
    myArr.push(a)
    a++
  }
  return myArr
}