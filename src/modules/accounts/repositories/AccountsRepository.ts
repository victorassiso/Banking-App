import { Account } from "../model/Account";
import { IAccountRepository } from "./IAccountsRepository";

class AccountsRepository implements IAccountRepository {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  create(user_id: string): Account {
    const account = new Account(user_id);

    this.accounts.push(account);

    return account;
  }
  
  listAll(): Account[] {
    return this.accounts;
  }

  listByUserId(user_id: string): Account[] {
    const accounts = this.accounts.filter((account)=> account.user_id === user_id);

    return accounts;
  }

  getById(id: string): Account | null {
    const account = this.accounts.find((account)=> account.id === id);

    if (account == undefined) {
      return null;
    }

    return account;
  }

  checkBalance(account_id: string) {
    const account = this.getById(account_id);
    
    if (!account) {
      throw new Error("Account with id " + account_id + " not found!")
    }

    return account.balance;
  }

  deposit(account_id: string, value: number): void {
    const account = this.getById(account_id);
    
    if (!account) {
      throw new Error("Account with id " + account_id + " not found!")
    }

    account.balance += value;
  }

  withdraw(account_id: string, value: number): void {
    const account = this.getById(account_id);
    
    if (!account) {
      throw new Error("Account with id " + account_id + " not found!")
    }

    if (account.balance < value) {
      throw new Error("insufficient balance!")
    }

    account.balance -= value;
  }
  
  transfer(toAccount_id: string, fromAccount_id: string, value: number): void {
    const fromAccount = this.getById(fromAccount_id);
    
    if (!fromAccount) {
      throw new Error("Account with id " + fromAccount_id + " not found!")
    }
    
    if (fromAccount.balance < value) {
      throw new Error("insufficient balance!")
    }
    
    const toAccount = this.getById(toAccount_id);
    
    if (!toAccount) {
      throw new Error("Account with id " + toAccount_id + " not found!")
    }

    fromAccount.balance -= value;
    toAccount.balance += value;
  }

}

export { AccountsRepository }
