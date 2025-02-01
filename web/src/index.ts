import { User } from "./models/User";

const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(
    "change event triggered on collection.. for this collection =>",
    collection
  );
});

collection.fetch();
