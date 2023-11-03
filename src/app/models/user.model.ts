export class User {
  constructor(
    public email: string,
    public password: string,
    public token?: string,
    public type?: string,
    public personalData?: { name: string; surname: string; avatar: any }
  ) {}
}
