const sumNumbers = (max) => {
    let sum = 0;
    let count = 0;
    while (count <= max) {
        sum += count;
        count++;
    }
    return sum;
}

console.log(sumNumbers(5));

