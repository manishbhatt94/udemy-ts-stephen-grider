import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
        <button type="button">Signup</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  render(): void {
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

  onButtonClick(): void {
    console.log("button was clicked");
  }
}
