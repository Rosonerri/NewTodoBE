console.clear();
import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const port: number = 2009;
const app: Application = express();

app.use(cors());
app.use(express.json());

mainApp(app);
const server = app.listen(2009, () => {
  console.log("App connected", port);
  dbConfig();
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);

  server.close(() => {
    process.exit(1);
  });
});
