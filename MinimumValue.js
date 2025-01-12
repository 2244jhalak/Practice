const MinimumValue = numbers => {

    let smallest = numbers[0];

    for (let number of numbers){

      if( number <= smallest ){

          smallest = number;

      }

    }

    return smallest;

}

const result = MinimumValue([55,98,45,78,55,35,13,98,99,78,98]);

console.log(result);