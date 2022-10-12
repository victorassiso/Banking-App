import { UsersRepository } from "../../users/repositories/UsersRepository";
import { Account } from "../model/Account";
import { AccountsRepository } from "../repositories/AccountsRepository";


class CreateAccountService {
  //private accountsRepository: AccountsRepository;
  private usersRepository: UsersRepository;
  private accountsRepository: AccountsRepository;

  constructor(usersRepository: UsersRepository, accountsRepository: AccountsRepository) {
    this.usersRepository = usersRepository;
    this.accountsRepository = accountsRepository;
  }

  execute(user_id: string): Account {
    const userExists = this.usersRepository.getById(user_id);
    
    if (!userExists) {
      throw new Error("User not found!");
    }
    
    const account = this.accountsRepository.create(user_id);

    return account;
  }
}

export { CreateAccountService }