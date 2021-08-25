import { Express, Request, Response } from "express";
import sessionRoutes from "./session.routes";
import userRoutes from "./user.routes";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("hello word");
  });

  app.use("/api/user", userRoutes);

  app.use("/api/sessions", sessionRoutes);
}
