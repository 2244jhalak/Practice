const CountConsonants = (str) => {
    const vowels = 'aeiou';
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

console.log(CountConsonants("hello world"));
console.log(CountConsonants("JavaScript"));
console.log(CountConsonants("abcd"));

