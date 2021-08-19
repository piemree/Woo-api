import { Express, Request, Response } from "express";
import {userController} from './controller/user.controller'
//import userController from './controller/user.controller';

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("hello word");
  });

  app.use("/user",userController)
}

