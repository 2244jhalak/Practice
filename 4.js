const cars = properties => {
     return properties.sort((a,b)=>a.year-b.year);
}

const data = [
    { make: "Jhalak", model: 420, year: 2025},
    { make: "Tandra", model: 123, year: 2024},
    { make: "Oishe", model: 234, year: 2023},
    { make: "Jim", model: 765, year: 2022},
]

const result = cars(data);
console.log(result);