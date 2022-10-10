import { User } from "../model/User";

// DTO => Data transfer object
interface ICreateUserDTO {
  name: string,
  username: string,
  password: string
}

interface IUsersRepository {
  create({name, username, password}: ICreateUserDTO): User;
  list(): User[];
  findByUsername(name: string): User | null;
}

export { ICreateUserDTO, IUsersRepository };