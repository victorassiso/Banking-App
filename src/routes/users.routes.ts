import { Router } from "express";
import { User } from "../model/User";
import { UsersRepository } from "../repositories/UsersRepository";

const userRoutes = Router();
const usersRepository = new UsersRepository();

userRoutes.post("/", (request, response) => {
  const { name, username, password } = request.body

  usersRepository.create({name, username, password});

  return response.status(201).send();
})

userRoutes.get("/", (request, response) => {
  const users = usersRepository.list();

  return response.json(users);
})

export { userRoutes };