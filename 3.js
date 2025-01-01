const sqr = num => {
    return num * num;
}

const double = num => {
    return num * 2;
}

const add = num => {
    return num + 5
}

const main = number => {
    const square = sqr(number);
    return (add((double(square))));
}

console.log(main(5));