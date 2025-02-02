import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "Tupac Shakur", age: 25 });

const userEdit = new UserEdit(
  document.getElementById("root") as HTMLDivElement,
  user
);
userEdit.render();
