import { Router } from "express";
import { CreateUserService } from "../modules/users/services/CreateUserService";
import { usersRepository } from "./db";

const userRoutes = Router();
// const usersRepository = new UsersRepository();

// Create new User
userRoutes.post("/", (request, response) => {
  const { name, username, password } = request.body

  const createUserService = new CreateUserService(usersRepository);
  try {
    createUserService.execute({ name, username, password });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({ error: error.message });
    }
  }
  
  return response.status(201).json({ message: "The user was created successfully!" });
})

// List all users
userRoutes.get("/all", (request, response) => {
  const users = usersRepository.list();
  return response.json(users);
})

// Get user by username
userRoutes.get("/username", (request, response) => {
  const { username } = request.body;

  try {
    
    const user = usersRepository.getByUsername(username);
    return response.json({ user: user});

  } catch (error) {
    
    if (error instanceof Error) {
    
      return response.status(400).json({ error: error.message })
    
    }
  }
  
})

// Get user by id
userRoutes.get("/id", (request, response) => {
  const { id } = request.body;

  try {
    
    const user = usersRepository.getById(id);
    return response.json({ user: user});

  } catch (error) {
    
    if (error instanceof Error) {
    
      return response.status(400).json({ error: error.message })
    
    }
  }
  
})

export { userRoutes };