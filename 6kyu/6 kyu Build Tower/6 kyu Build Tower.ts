/**
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
 */
export const towerBuilder = (nFloors: number): string[] => {
    // build here
    let myArr:any = []
    let count = 1
  for(let i =1; i<=nFloors; i++){
     myArr.push(count)
    count+=2
    }
    const Allstar = myArr.map(el=> "*".repeat(el))
    
  const starsWithSpaces = Allstar.map(stars => {
      const numSpaces = (Allstar[Allstar.length - 1].length - stars.length) / 2; 
      const spaces = ' '.repeat(numSpaces); 
      return spaces + stars + spaces; 
  })
  
  return starsWithSpaces
  
  }
  console.log(towerBuilder(5))
  