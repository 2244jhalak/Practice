const Average = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;

console.log(Average([10, 20, 30, 40, 50]));
console.log(Average([5, 15, 25]));
