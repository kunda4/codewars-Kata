/**
DESCRIPTION:
Complete the function which will return the area of a circle with the given radius.

Round the returned number to two decimal places. If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false
 */

var circleArea = function (radius) {
  if (radius <= 0) return false;
  let num = Number((radius * radius * Math.PI).toFixed(2));
  return !isNaN(num) ? num : false;
};
