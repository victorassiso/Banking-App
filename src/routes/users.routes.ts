import { Router } from "express";
import { User } from "../model/User";
import { UsersRepository } from "../repositories/UsersRepository";

const userRoutes = Router();
const usersRepository = new UsersRepository();

// Create new User route
userRoutes.post("/", (request, response) => {
  // Initialize body input
  const { name, username, password } = request.body

  // Validate username
  const usernameAlreadyExists = usersRepository.findByUsername(username);
  if (usernameAlreadyExists) {
    return response.status(400).json({ error: "This username already exists!" });
  }

  // Create user if username doesn't already exists
  usersRepository.create({name, username, password});

  // Return status 201 (Created)
  return response.status(201).json({message: "The user was created successfully!"});
})

// List all users
userRoutes.get("/", (request, response) => {
  // Initialize body input
  const users = usersRepository.list();
  
  // Return users
  return response.json(users);
})

export { userRoutes };