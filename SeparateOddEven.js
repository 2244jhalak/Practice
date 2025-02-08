const SeparateOddEven = arr => ({
    odd: arr.filter(n => n % 2 !== 0),
    even: arr.filter(n => n % 2 === 0)
});

console.log(SeparateOddEven([1, 2, 3, 4, 5, 6, 7, 8]));

