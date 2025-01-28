const Factorial = number => {

    let fact = 1;

    for(let i=number; i >= 1; i--) {

       fact = fact * i;

    }

    return fact;

}

const result = Factorial(5);

console.log(result);