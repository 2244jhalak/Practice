const RomanToInt = (roman) => {
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  
    return [...roman].reduce((total, current, index, arr) => 
      romanMap[current] < romanMap[arr[index + 1]] ? total - romanMap[current] : total + romanMap[current]
    , 0);
  };
  
  console.log(RomanToInt("X")); 
  console.log(RomanToInt("IX"));
  console.log(RomanToInt("LVIII"));
  console.log(RomanToInt("MCMXCIV"));
  