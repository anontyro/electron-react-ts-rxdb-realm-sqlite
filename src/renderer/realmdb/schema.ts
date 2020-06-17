import Realm from "realm";
import { UserDocType } from "../types";

export class Person implements UserDocType {
  name: string = "";
  phone: string = "";
  address: string = "";
  area?: string | undefined;
  static schema: Realm.ObjectSchema;
  // get fullName() {
  //   return "Mr." + name;
  // }
}

Person.schema = {
  name: "Person",
  properties: {
    name: "string",
    phone: "string",
    address: "string",
    area: "string",
  },
};
