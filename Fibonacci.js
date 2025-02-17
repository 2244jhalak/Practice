const Fibonacci = (n) => (n <= 1 ? n : Fibonacci(n - 1) + Fibonacci(n - 2));

console.log(Fibonacci(7));
