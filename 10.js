const MaximumValue = numbers => {

      let largest = numbers[0];

      for (let number of numbers){

        if( number >= largest ){

            largest = number;

        }

      }

      return largest;

}

const result = MaximumValue([55,98,45,78,55,35,13,98,99,78,98]);

console.log(result);