const EvenSum = arr => {
      let newArr = [];
      
      for(let number of arr){
        const element = number;
        if( element%2 === 0 ){

            newArr.push(element)
        }
        
      }
      
      const sum = newArr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
      return sum;
}

const numbers = [ 2,3,9,6,8,14,7 ];
const result = EvenSum(numbers);
console.log(result);