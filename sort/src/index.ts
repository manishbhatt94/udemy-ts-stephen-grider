import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbers = new NumbersCollection([10, 3, -5, 0, 2, -1]);
numbers.sort();
console.log(numbers.data);

const chars = new CharactersCollection("Xbaay");
chars.sort();
console.log(chars.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(28);
linkedList.add(13);
linkedList.sort();
linkedList.print();
