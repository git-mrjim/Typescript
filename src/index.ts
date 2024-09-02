class Greeter {
  greeting: string;

  constructor(message: string) {
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
  const foo = (x: number) => {
    return 2 * x;
  };

  console.log(foo(27));
}

let myFavoritePet: "dog";
myFavoritePet = "dog";

type Species = "dog" | "cat" | "fish";

function BuyPet(species: Species, name: string): string {
  return `You buy: ${name} as ${species}`;
}

console.log(BuyPet("fish", "Mimo"));
