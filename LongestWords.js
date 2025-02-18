const LongestWords = (sentence) => {
    const words = sentence.split(" ");
    const maxLength = Math.max(...words.map(word => word.length));
    return words.filter(word => word.length === maxLength);
  };
  
  console.log(LongestWords("The quick brown fox jumps over the lazy dog")); 
 
  