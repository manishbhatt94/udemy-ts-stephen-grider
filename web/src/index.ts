import { User } from "./models/User";

const user = new User({ id: 1, name: "Shawn Carter", age: 56 });

user.on("change", () => {
  console.log("user changed", user);
});
user.on("save", () => {
  console.log("user saved", user);
});

user.save();
