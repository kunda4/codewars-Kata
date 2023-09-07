/*In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).

Acute

Right

Obtuse
Examples:
triangleType(2, 4, 6); // return 0 (Not triangle)
triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°) */
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
if a2+b2>c2, the triangle is acute,
if a2+b2=c2, the triangle is a right triangle,
if a2+b2<c2, the triangle is obtuse,
*/

function triangleType(a, b, c) {
  // sort array number
  [a, b, c] = [a, b, c].sort((a, b) => a - b);
  console.log([a, b, c]);
  if (a + b <= c) {
    return 0;
  }
  //check if angle is acute
  if (a ** 2 + b ** 2 > c ** 2) {
    console.log("triangle is acute");
    return 1;
  }
  //check if angle is right angle
  else if (a ** 2 + b ** 2 === c ** 2) {
    console.log("triangle is right");
    return 2;
  }
  //check if angle is obtuse
  else if (a ** 2 + b ** 2 < c ** 2) {
    console.log("triangle is obtuse");
    return 3;
  }
}
console.log(triangleType(7, 12, 8));
