const VowelChecker = sentence => {

    const arr = sentence.split("");
    let newArr = [];
    for(let word of arr){
        if ( word.toLowerCase() === ("a").toLowerCase() || word.toLowerCase() === ("e").toLowerCase() || word.toLowerCase() === ("i").toLowerCase() || word.toLowerCase() === ("o").toLowerCase() || word.toLowerCase() === ("u").toLowerCase()){
            newArr.push(word);
        }
    }

    return ([...new Set(newArr)])

}

const result = VowelChecker("Happy New Year");
console.log(result);