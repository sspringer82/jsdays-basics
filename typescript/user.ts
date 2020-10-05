export class User {
  age: number;

  constructor(private firstname: string, private lastname: string, age: number) {
    this.age = age;
  }

  setAge(age: number) {
    // this.age = age as any as number; // any cast
    this.age = age;
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

export interface Ageable {
  age: number;
  getFullName: () => string;
}