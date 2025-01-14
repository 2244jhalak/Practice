const modify = properties => {
    const findData = properties.find(property=> property.name === "Tandra");
    return findData;
}
const data = [
  { name: "Tandra", age: 30 },
  { name: "Jhalak", age: 25 }
];
const result = modify(data);

console.log(result);