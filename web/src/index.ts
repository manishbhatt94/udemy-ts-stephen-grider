import { User } from "./models/User";

const user = User.buildUser({ id: 1 });

user.on("save", () => {
  console.log("user saved => user:", user);
});
user.set({ id: 1, name: "Christopher Wallace", age: 25 });

user.save();
