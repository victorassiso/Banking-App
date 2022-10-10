import { Router } from "express";
import { User } from "../model/User";

const userRoutes = Router();

const users: User[] = [];

userRoutes.post("/", (request, response) => {
  const { name, username, password } = request.body

  const user = new User();
  Object.assign(user, {
    name,
    username,
    password,
  })

  users.push(user);

  return response.status(201).json({ user });
})

export { userRoutes };