export class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    public career: string,
    public age: number,
    public location: string,
    public phone: string,
    public email: string,
    public hobbies: Array<string>
  ) {}
}
