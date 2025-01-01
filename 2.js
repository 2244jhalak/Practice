const mapping = properties => {
     return properties.map( property => property.title);
}

const data = [
    { title: "Rocket", author: "Jhalak", year: 2025 },
    { title: "Machine", author: "Jim", year: 2025 },
    { title: "Chocolate", author: "Sowa", year: 2025 },
    { title: "Peyajer Kali", author: "Nargis", year: 2025 },
    { title: "Mula Shak", author: "Nasrin", year: 2025 },
];
const result = mapping(data);
console.log(result);