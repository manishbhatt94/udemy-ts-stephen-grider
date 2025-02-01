import { User } from "./models/User";

const user = new User({ name: "Ra's Al Ghul", age: 650 });
const age = user.get("age");
console.log(age);
user.on("change", () => console.log("event change handler"));
user.trigger("change");
