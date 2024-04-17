import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";

interface Message extends Request {
  body: {
    message: string;
    name: string;
  };
}

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("DEBUG: No 1");
  next();
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("DEBUG: No 2");
  res.send("Hello World!");
});

app.post("/", (req: Message, res: Response, next: NextFunction) => {
  console.log("DEBUG: No 3");
  if ("message" in req.body && "name" in req.body) {
    res.send(req.body);
    return;
  } else {
    res.send("Request is not of type Message");
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("DEBUG: Error");
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running!🚀 ${process.env.Root}${PORT}`);
});
