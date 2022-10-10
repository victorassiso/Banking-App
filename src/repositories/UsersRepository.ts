import { User } from "../model/User";

// DTO => Data transfer object
interface ICreateUserDTO {
  name: string,
  username: string,
  password: string
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({name, username, password}: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      username,
      password,
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }
};

export { UsersRepository };