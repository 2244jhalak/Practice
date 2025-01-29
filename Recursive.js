function Recursive(n) {
    if (n === 0 || n === 1) return 1; // Base case
    return n * Recursive(n - 1); // Recursive call
}

console.log(Recursive(5)); 
