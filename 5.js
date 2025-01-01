const modify = properties => {
      const filter = properties.filter(property=> property.name === "Tandra");
      return filter.map(fil=>fil.name)
}
const data = [
    { name: "Tandra", age: 30 },
    { name: "Jhalak", age: 25 }
];
const result = (modify(data))[0];
const main = data.filter(Adata=>Adata.name===result);
main[0].age=27;

console.log(data);