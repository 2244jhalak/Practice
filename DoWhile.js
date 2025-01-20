const sumNumbers = (max) => {
    let sum = 0;
    let count = 0;
    do {
        sum += count;
        count++;
    } while (count <= max);
    return sum;
}

console.log(sumNumbers(5)); 
