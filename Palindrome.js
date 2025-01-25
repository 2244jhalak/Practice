const Palindrome = str => {
    
    const reverse = str.split("").reverse().join("");
    return str.toLowerCase() === reverse.toLowerCase();

}

console.log(Palindrome("MAdbm"))