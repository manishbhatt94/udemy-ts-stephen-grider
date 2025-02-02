import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Tupac Shakur", age: 25 });

const userForm = new UserForm(
  document.getElementById("root") as HTMLDivElement,
  user
);
userForm.render();
