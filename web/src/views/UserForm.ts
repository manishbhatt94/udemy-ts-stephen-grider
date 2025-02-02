import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

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

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
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
