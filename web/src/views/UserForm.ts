import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get("name")}</div>
        <div>User age: ${this.model.get("age")}</div>
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
        <button class="set-name" type="button">Change name</button>
        <button class="set-age" type="button">Set Random Age</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button.set-age": this.onSetAgeClick,
      "click:button.set-name": this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector(
      'input[name="username"]'
    ) as HTMLInputElement;
    const name = input.value;
    this.model.set({ name });
  };
}
