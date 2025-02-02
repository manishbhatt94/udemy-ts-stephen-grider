import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <dl>
          <dt>User Name:</dt>
          <dd>${this.model.get("name")}</dd>
          <dt>User Age:</dt>
          <dd>${this.model.get("age")}</dd>
        </dl>
      </div>
    `;
  }
}
