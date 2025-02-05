@classDecorator
class Boat {
  @testPropertyDecorator
  color: string = "red";

  @testPropertyDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }

  @logError("Boat sunk :`(")
  pilot(): void {
    throw new Error("Pilotting sucks");
    console.log("swish");
  }

  dock(
    @parameterDecorator anchorDepth: number,
    @parameterDecorator dockingMode: string
  ) {}
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    try {
      method();
    } catch (e: any) {
      console.log(errorMessage);
      console.log("Message from Captain: " + e.message);
    }
  };
}

function testPropertyDecorator(target: any, key: string): void {
  console.log("target :", target);
  console.log("key :", key);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
