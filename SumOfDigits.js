const SumOfDigits = n => n.toString().split('').reduce((sum, digit) => sum + +digit, 0);

console.log(SumOfDigits(1234));
console.log(SumOfDigits(9876));
