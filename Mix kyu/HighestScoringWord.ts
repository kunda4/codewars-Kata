  /**
 Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */ 

export function high(str:string): string {

    let splitArr = str.split(' ')
    let splitChar = splitArr.map((ele)=> ele.split(''))
  
    let charValue = splitChar.map(element=>{
      let count = 0
      element.map((el) => count+= el.toUpperCase().charCodeAt(0) -64)
       return count
    })
    let largest =0;
    let largestIndex:any;
  for(let i=0; i< charValue.length; i++)
  if (charValue[i] > largest) {
    
              largest = charValue[i];
              largestIndex = i;
      }
      return splitArr[largestIndex];
  }
  
   console.log(high('what time are we climbing up the volcano'))