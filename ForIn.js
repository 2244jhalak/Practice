const obj = {
    id:1,name:"Jhalak"
};
const Logic = obj => {
    let newObj = {};
    for (let property in obj) {
        newObj[property] = obj[property];
    }
    return newObj;
}

const result = Logic(obj);
console.log(result);
