/**
DESCRIPTION:
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

 */

export function isPalindrome(x: string): boolean {
    return x.toLowerCase().split("").reverse().join("") === x.toLowerCase() ? true : false
  }