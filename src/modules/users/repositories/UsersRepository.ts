import { User } from "../model/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository{
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, username, password }: ICreateUserDTO): User {
    const user = new User(name, username, password);

    this.users.push(user);

    return user;
  }

  list(): User[] {
    return this.users;
  }

  findByUsername(username: string): User | null {
    const user = this.users.find((user) => user.username === username)
    if (user == undefined) {
      return null
    }
    return user;
  }
};

export { UsersRepository };