import express, { Request, Response, NextFunction } from "express";
import * as dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running!!! ${process.env.Root}${PORT}`);
});