import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbers = new NumbersCollection([10, 3, -5, 0, 2, -1]);
const sorter1 = new Sorter(numbers);
sorter1.sort();
console.log(numbers.data);

const chars = new CharactersCollection("Xbaay");
const sorter2 = new Sorter(chars);
sorter2.sort();
console.log(chars.data);
