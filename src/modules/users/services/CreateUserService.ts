import { userRoutes } from "../../../routes/users.routes";
import { User } from "../model/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IRequest {
  name: string,
  username: string,
  password: string
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository
  }

  execute({ name, username, password }: IRequest): User {
    const usernameAlreadyExists = this.usersRepository.getByUsername(username);

    if (usernameAlreadyExists) {
      throw new Error("Username already exists!");
    }

    const user = this.usersRepository.create({ name, username, password });    
    
    return user;
  }
}

export { CreateUserService }