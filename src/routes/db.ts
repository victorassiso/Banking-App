import { AccountsRepository } from "../modules/accounts/repositories/AccountsRepository";
import { UsersRepository } from "../modules/users/repositories/UsersRepository";

const accountsRepository = new AccountsRepository();
const usersRepository = new UsersRepository();

export { accountsRepository, usersRepository };