import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  findAllUsers,
  findUser,
  updateUser,
} from "../service/user.service";
import { omit } from "lodash";
import logger from "../logger";
import { UserDocument } from "../model/user.model";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (error) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}

export async function getAllUserHandler(req: Request, res: Response) {
  try {
    const users = await findAllUsers();
    const omitedUsers = users.map((user) => omit(user, "password"));
    return res.send(omitedUsers);
  } catch (error) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}

export async function getUserHandler(req: Request, res: Response) {
  const query = { _id: req.params.id };
  try {
    const user = (await findUser(query)) as UserDocument;
    return res.send(omit(user, "password"));
  } catch (error) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}

export async function updateUserHandler(req: Request, res: Response) {
  try {
    const user = await updateUser(req.params.id, req.body);
    return res.send(omit(user, "password"));
  } catch (error) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}

export async function deleteUserHandler(req: Request, res: Response) {
  try {
    const user = await deleteUser(req.params.id);
    return res.send(omit(user, "password"));
  } catch (error) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
