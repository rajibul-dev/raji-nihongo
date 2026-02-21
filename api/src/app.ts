import dotenv from "dotenv";
dotenv.config();

import express from "express";
import type { Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();
const PORT = process.env.PORT || 3001;

// Mount Better Auth routes under /api/v1/auth
app.all("/api/v1/auth/{*any}", toNodeHandler(auth));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("✅ Raji Nihongo server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
