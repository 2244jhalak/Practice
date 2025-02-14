const FindMissingNumber = (arr, n) => {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
};
  
console.log(FindMissingNumber([1, 2, 3, 5, 6], 6));
  