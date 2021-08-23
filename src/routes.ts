import { Express, Request, Response } from "express";
import { createUserSessionHandler } from "./controller/session.controller";
import {createUserHandler} from './controller/user.controller'
import validateRequest from "./middleware/validateRequest";
import { createUserSchema,createUserSessionSchema } from "./schema/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("hello word");
  });

  app.post("/api/user",validateRequest(createUserSchema),createUserHandler)

  app.post("/api/sessions",validateRequest(createUserSessionSchema),createUserSessionHandler)

}

