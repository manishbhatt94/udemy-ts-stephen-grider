import { User } from "./models/User";

const user = new User({ name: "John Doe", age: 19 });

user.set({ name: "Oliver Queen", age: 35 });
console.log(user.get("name"));
console.log(user.get("age"));
