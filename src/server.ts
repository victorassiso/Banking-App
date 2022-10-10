import express from 'express';
import { userRoutes } from './routes/users.routes';
import { accountRoutes } from './routes/accounts.routes';

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/accounts", accountRoutes);

app.listen(3333, () => console.log("Server is running!"));