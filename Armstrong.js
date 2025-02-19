const isArmstrong = (num) => {
    let sum = 0, temp = num;
    const digits = num.toString().length;
    while (temp > 0) {
      sum += Math.pow(temp % 10, digits);
      temp = Math.floor(temp / 10);
    }
    return sum === num;
};
  
console.log(isArmstrong(153));
console.log(isArmstrong(123));
  