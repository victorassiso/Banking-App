import { Account } from "../model/Account";

interface IAccountRepository {
  create(user_id: string): Account;
  listAll(): Account[];
  listByUserId(user_id: string): Account[];
  getById(id: string): Account | null;
  checkBalance(account_id: string): number;
  deposit(account_id: string, value: number): void;
  withdraw(account_id: string, value: number): void;
  transfer(toAccount_id: string, fromAccount_id: string, value: number): void;
}

export { IAccountRepository };