const positiveSum = (arr) =>
  arr.filter((el) => el > 0).reduce((acc, curr) => acc + curr, 0);
