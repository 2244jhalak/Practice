const Duplicate = words => {
      return ([... new Set(words)])
}

const result = Duplicate([65,6,9,8,98,65,9,1,2,7]);
console.log(result);