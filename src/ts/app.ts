import Cart from "./Cart";
import Movie from "./Movie";

const avengers = new Movie(123, '///23123', 359, 'Мстители', 'Avengers', true, 2012, 'США', 'Avengers assemble!', ['action', 'superheroes'], '137')
const spiderMan = new Movie(124, '///23124', 359, 'Человек паук', 'Spider-man', true, 2015, 'США', 'Friendly neighbor', ['action', 'superheroes'], '115')

const myCart = new Cart();
myCart.add(avengers);
myCart.add(spiderMan);
console.log(myCart.getAll());

