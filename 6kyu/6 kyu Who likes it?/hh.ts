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
export const likes = (names : string[]) : string => {
    // TODO
  
    if(names.length === 0){
      return 'no one likes this'
    }
    else if(names.length === 1){
      return `${names} likes this`
    }
    else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }
      else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
        else if(names.length > 3){
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
    return " "
  }
  
  