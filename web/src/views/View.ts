import { HasId, Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  onBeforeRender(): void {}

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
    this.mapRegions(templateElement.content);

    // to be implemented by sub-classes of View for nesting of sub-views
    this.onBeforeRender();

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

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }
}
