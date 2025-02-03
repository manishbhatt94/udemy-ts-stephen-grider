import { User } from "./models/User";
import { UserList } from "./views/UserList";

const userCollection = User.buildUserCollection();

userCollection.on("change", renderCollection);

userCollection.fetch();

function renderCollection() {
  const root = document.getElementById("root");
  if (root) {
    const userList = new UserList(root, userCollection);
    userList.render();
  } else {
    throw new Error("Root element needs to be present in HTML");
  }
}
