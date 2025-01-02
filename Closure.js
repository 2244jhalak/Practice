const Parent = () => {
    const name = "Nakib Hasan Jhalak";
    const Child = () => {
        console.log(name);
        return name
    }
    return Child

}

const myFunction = Parent();
console.log(myFunction())