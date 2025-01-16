const modify = properties => {
    const result = properties.map(property=>property);
    return result
}

const data = [
  { name: "Tandra", age: 30 },
  { name: "Jhalak", age: 25 }
];

const result = modify(data);
console.log(data);