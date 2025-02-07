import "reflect-metadata";

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("Hello")
  fly(): void {
    console.log("vrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}

// const plane = {
//   color: "red",
// };

/** Metadata on an object */

// Reflect.defineMetadata("note", "info about plane obj", plane);
// Reflect.defineMetadata("height", 10, plane);

// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);

// console.log(note);
// console.log(height);

/** Metadata on an object property */
// Reflect.defineMetadata("colorNote", "In RGBA format", plane, "color");

// const colorNote = Reflect.getMetadata("colorNote", plane, "color");

// console.log(colorNote);
