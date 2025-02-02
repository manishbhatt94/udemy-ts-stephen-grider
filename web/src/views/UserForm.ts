import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <label for="name">Name</label>
        <input type="text"
          name="name" id="name"
          placeholder="${this.model.get("name")}"
        >
        <button class="set-name" type="button">Change name</button>
        <button class="set-age" type="button">Set Random Age</button>
        <button class="save-model" type="button">Save User</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button.set-age": this.onSetAgeClick,
      "click:button.set-name": this.onSetNameClick,
      "click:button.save-model": this.onSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;
    const name = input.value;
    this.model.set({ name });
  };

  onSaveClick = (): void => {
    this.model.save();
  };
}
