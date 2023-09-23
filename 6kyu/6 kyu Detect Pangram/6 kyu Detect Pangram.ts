/**
DESCRIPTION:
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


 */

export function isPangram(phrase: string): boolean{

    let alph = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
    let myAlph= alph.split(" ")
    let myStr = phrase.toLowerCase().split("")
  
    for(let i of myAlph){
      for (let j of myStr){
         if(!myStr.includes(i)){
      return false
      }
    }
  
    }
     return true
  }