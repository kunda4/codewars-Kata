/**
Task
Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.
 */
const isIntegerCube = (n) => Number.isInteger(Math.cbrt(n));

const cutCube = (volume, n) => isIntegerCube(n) && isIntegerCube(volume / n);
