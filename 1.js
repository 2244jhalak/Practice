const FilterMap = Properties => {
    const result = Properties.filter( property => property.gender === "Female");
    return result.map(Aresult=>Aresult.name);

}

const data = [
    { name: "Jessica", age: 20, gender:"Female" },
    { name: "Jhalak", age: 25, gender:"Male" },
    { name: "Sowa", age: 16, gender:"Female" },
    { name: "Sayma", age: 21, gender:"Female" },
    { name: "Idris Ali", age: 60, gender:"Male" },
    { name: "Jim", age: 23, gender:"Male" },
]

const result = FilterMap(data);
console.log(result);

