import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from './app/routes';
import handleNotFoundError from "./errors/handleNotFoundError";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import cookieParser from 'cookie-parser';

const app: Application = express();
app.use(cors());

// Parser
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/', routes);

// Testing
app.get("/", async (req: Request, res: Response) => {
  res.send({ success: true, message: "Working successfully!!" });
});

// Global Error Handler
app.use(globalErrorHandler);

// Handle not found routes
app.use(handleNotFoundError());

export default app;
