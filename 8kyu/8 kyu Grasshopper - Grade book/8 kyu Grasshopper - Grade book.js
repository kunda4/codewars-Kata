/**
DESCRIPTION:
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
 */
function getGrade(s1, s2, s3) {
  // Code here
  let sum = s1 + s2 + s3;
  if (sum >= 90 * 3) return "A";
  if (sum >= 80 * 3) return "B";
  if (sum >= 70 * 3) return "C";
  if (sum >= 60 * 3) return "D";
  if (sum >= 0 * 3) return "F";
}
