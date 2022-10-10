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

  execute({ name, username, password }: IRequest): void {

    // 1. Create User
    const usernameAlreadyExists = this.usersRepository.findByUsername(username);

    if (usernameAlreadyExists) {
      throw new Error("Username already exists!");
    }

    // Create user if username doesn't already exists
    const user = this.usersRepository.create({ name, username, password });    
  }
}

export { CreateUserService }