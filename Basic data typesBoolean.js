/**
 * DESCRIPTION:
In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, ||, ! or some bitwise operators:&, |, ^

Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment.
 */

function trueOrFalse(val) {
  if (
    val === false ||
    val === 0 ||
    val === "" ||
    val === null ||
    val === undefined
  ) {
    return "false";
  } else {
    return "true";
  }
}
