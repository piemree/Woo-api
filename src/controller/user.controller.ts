import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import { omit } from "lodash";
import logger from "../logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (error) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}

export async function createUserSessionHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (error) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
