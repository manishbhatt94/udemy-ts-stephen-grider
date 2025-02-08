import "reflect-metadata";
import { MetadataKeys } from "./MatadataKeys";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
  };
}
