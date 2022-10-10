import { Router } from "express";
import { AccountsRepository } from "../modules/accounts/repositories/AccountsRepository";

const accountRoutes = Router()
const accountsRepository = new AccountsRepository();

accountRoutes.post("/", (request, response) => {
  const {user_id} = request.body;

  accountsRepository.create(user_id);

  // Return status 201 (Created)
  return response.status(201).json({ message: "The account was created successfully!" });
})

accountRoutes.get("/all", (request, response) => {
  const accounts = accountsRepository.list();
  return response.json(accounts);
})

accountRoutes.get("/balance", (request, response) => {
  const {account_id} = request.body;

  const balance = accountsRepository.checkBalance(account_id);

  return response.json(balance);
})

accountRoutes.put("/deposit", (request, response) => {
  const {account_id, value} = request.body;

  accountsRepository.deposit(account_id, value);

  return response.json({ message: "Deposit sucessful!" });
})

accountRoutes.put("/withdraw", (request, response) => {
  const {account_id, value} = request.body;

  accountsRepository.withdraw(account_id, value);

  return response.json({ message: "Withdraw sucessful!" });
})

accountRoutes.put("/transfer", (request, response) => {
  const {toAccount_id, fromAccount_id, value} = request.body;

  accountsRepository.transfer(toAccount_id, fromAccount_id, value);

  return response.json({ message: "Transfer sucessful!" });
})

export { accountRoutes };