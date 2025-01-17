const arr = [5,77,44,9,0,6,7];
const Logic = numbers => {
    let newArr = [];
    for (let number of numbers){
        newArr.push(number);
    }
    return newArr;
}
const result = Logic(arr);
console.log(result);