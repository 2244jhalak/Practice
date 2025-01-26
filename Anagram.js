const isAnagram = (str1, str2) => {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));