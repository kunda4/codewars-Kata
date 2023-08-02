/*
In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).

If each angle is less than 90°, this triangle is acute and the function should return 1.

If one angle is strictly 90°, this triangle is right and the function should return 2.

If one angle is more than 90°, this triangle is obtuse and the function should return 3.

If three sides cannot form a triangle, or one angle is 180° (which turns the triangle into a segment) - the function should return 0.

Three input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both, depending on the language).
**/

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
  if a2+b2>c2, the triangle is acute,
  if a2+b2=c2, the triangle is a right triangle,
  if a2+b2<c2, the triangle is obtuse,
*/
export function triangleType(a: number, b: number, c: number): number {
    [a,b,c] = [a,b,c].sort((a,b) => a-b)
    console.log([a,b,c])
    if(a+b<=c){
      return 0;
    }
   else if(((a*a) + (b*b))> c*c){
    return 1
  }else if(((a*a) + (b*b)) === c*c){
    return 2
  }else (((a*a) + (b*b)) < c*c)
      return 3
   }
  
   console.log(triangleType(7, 12, 8))