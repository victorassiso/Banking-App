import { Router } from "express";
import { UsersRepository } from "../modules/users/repositories/UsersRepository";
import { CreateUserService } from "../modules/users/services/CreateUserService";

const userRoutes = Router();
const usersRepository = new UsersRepository();

// Create new User route
userRoutes.post("/", (request, response) => {
  // Initialize body input
  const { name, username, password } = request.body

  // Call Create User Service
  const createUserService = new CreateUserService(usersRepository);
  try {
    createUserService.execute({ name, username, password });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({ error: error.message });
    }
  }

  // Return status 201 (Created)
  return response.status(201).json({ message: "The user was created successfully!" });
})

// List all users
userRoutes.get("/", (request, response) => {
  const users = usersRepository.list();
  return response.json(users);
})

export { userRoutes };