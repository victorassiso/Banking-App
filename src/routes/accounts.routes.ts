import { Router } from "express";
import { CreateAccountService } from "../modules/accounts/services/CreateAccountService";
import { accountsRepository } from "./db";
import { usersRepository } from "./db";

const accountRoutes = Router()
//const accountsRepository = new AccountsRepository();

// Create Account
accountRoutes.post("/", (request, response) => {
  const {user_id} = request.body;

  const createAccountService = new CreateAccountService(usersRepository, accountsRepository);
  try {
    createAccountService.execute(user_id);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({ error: error.message });
    }
  }

  return response.status(201).json({ message: "Account created successfully!" });
})

// Get Account by Id
accountRoutes.get("/id", (request, response) => {
  const {account_id} = request.body;

  const account = accountsRepository.getById(account_id);

  return response.json(account);
})

// List all Accounts
accountRoutes.get("/all", (request, response) => {
  const accounts = accountsRepository.listAll();
  return response.json(accounts);
})

// List by User Id
accountRoutes.get("/user", (request, response) => {
  const {user_id} = request.body;

  const accounts = accountsRepository.listByUserId(user_id);
  
  return response.json(accounts);
})

// Check Balance
accountRoutes.get("/balance", (request, response) => {
  const {account_id} = request.body;

  const balance = accountsRepository.checkBalance(account_id);

  return response.json(balance);
})

// Deposit
accountRoutes.put("/deposit", (request, response) => {
  const {account_id, value} = request.body;

  accountsRepository.deposit(account_id, value);

  return response.json({ message: "Deposit sucessful!" });
})

// Withdraw
accountRoutes.put("/withdraw", (request, response) => {
  const {account_id, value} = request.body;

  accountsRepository.withdraw(account_id, value);

  return response.json({ message: "Withdraw sucessful!" });
})

// Transfer
accountRoutes.put("/transfer", (request, response) => {
  const {toAccount_id, fromAccount_id, value} = request.body;

  accountsRepository.transfer(toAccount_id, fromAccount_id, value);

  return response.json({ message: "Transfer sucessful!" });
})

export { accountRoutes };