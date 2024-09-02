"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}
let greeter = new Greeter("Hello, World");
console.log(greeter.greet());
let foo = "23";
{
    const foo = (x) => {
        return 2 * x;
    };
    console.log(foo(27));
}
let myFavoritePet;
myFavoritePet = "dog";
function BuyPet(species, name) {
    return `You buy: ${name} as ${species}`;
}
console.log(BuyPet("fish", "Mimo"));
