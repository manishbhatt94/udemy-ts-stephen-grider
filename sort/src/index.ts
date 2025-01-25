import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbers = new NumbersCollection([10, 3, -5, 0, 2, -1]);
numbers.sort();
console.log(numbers.data);

const chars = new CharactersCollection("Xbaay");
chars.sort();
console.log(chars.data);
