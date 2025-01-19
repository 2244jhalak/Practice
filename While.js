const sumNumbers = (max) => {
    let sum = 0;
    let count = 0;
    while (count <= max) {
        sum += count;
        count++;
    }
    return sum; // Return the total sum
};

console.log(sumNumbers(5)); // Output: 15 (0 + 1 + 2 + 3 + 4 + 5)

