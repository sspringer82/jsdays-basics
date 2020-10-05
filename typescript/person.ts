import { User } from "./user";

export default class Person extends User { // 1x default export pro datei
  constructor(f: string, l: string, a: number) {
    console.log('Hello new Person');
    super(f, l, a);
  }

  greet(): void {
    console.log(`Hello ${this.getFullName()}`);
  }
}