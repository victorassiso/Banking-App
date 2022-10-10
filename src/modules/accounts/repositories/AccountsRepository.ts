import { Account } from "../model/Account";
import { IAccountRepository } from "./IAccountsRepository";

class AccountsRepository implements IAccountRepository {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  create(user_id: string): void {
    const account = new Account(user_id);

    this.accounts.push(account);
  }
  
  list(): Account[] {
    return this.accounts;
  }

  findById(id: string): Account | null {
    const account = this.accounts.find((account)=>{ account.id === id});
    
    if (account == undefined) {
      return null;
    }

    return account;
  }

  checkBalance(account_id: string) {
    const account = this.accounts.find((account) => account.id == account_id)
    
    if (account == undefined) {
      throw new Error("Conta não encontrada!")
    }

    return account.balance;
  }

  deposit(account_id: string, value: number): void {
    const account = this.accounts.find((account) => account.id == account_id)
    
    if (account == undefined) {
      throw new Error("Conta não encontrada!")
    }

    account.balance += value;
  }

  withdraw(account_id: string, value: number): void {
    const account = this.accounts.find((account) => account.id == account_id)
    
    if (account == undefined) {
      throw new Error("Conta não encontrada!")
    }

    account.balance -= value;
  }
  
  transfer(toAccount_id: string, fromAccount_id: string, value: number): void {
    const toAccount = this.accounts.find((account) => account.id == toAccount_id)
    
    if (toAccount == undefined) {
      throw new Error("Conta não encontrada!")
    }
    
    const fromAccount = this.accounts.find((account) => account.id == fromAccount_id)

    if (fromAccount == undefined) {
      throw new Error("Conta não encontrada!")
    }

    toAccount.balance += value;
    fromAccount.balance -= value;
  }

}

export { AccountsRepository }
