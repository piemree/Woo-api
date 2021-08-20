import { Express, Request, Response } from "express";
import {createUserHandler,createUserSessionHandler} from './controller/user.controller'
import validateRequest from "./middleware/validateRequest";
import { createUserSchema,createUserSessionSchema } from "./schema/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("hello word");
  });

  app.post("/api/user",validateRequest(createUserSchema),createUserHandler)

  app.post("/api/sessins",validateRequest(createUserSessionSchema),createUserSessionHandler)

}

