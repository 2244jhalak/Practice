const DoSomething = callback => {
    console.log("Something Doing.....");
    callback();
}

const sayHello = () => {
    console.log("Hello, Nakib Hasan Jhalak");
}

DoSomething(sayHello);
