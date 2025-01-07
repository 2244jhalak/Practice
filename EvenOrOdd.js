const EvenOrOdd = number => {

    if ( number % 2 === 0 ) {
        return "Even Number"
    }
    else {
        return "Odd Number"
    }

}

const result = EvenOrOdd(5);
console.log(result);