import { validateUser } from "../service/user.service";
import { Request, Response } from "express";
import {
  createAccessToken,
  createSession,
  findSessions,
  updateSession,
} from "../service/session.service";
import { sign } from "../utils/jwt.utils";
import { get } from "lodash";

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validateUser(req.body);

  if (!user) return res.status(401).send("Invalid username or password");

  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = createAccessToken({
    user,
    session,
  });

  const refreshToken = sign(session);

  return res.send({ accessToken: accessToken, refreshToken: refreshToken });
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, "user.session");
  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}

export async function getUserSessionsHandler(req: Request, res: Response){

  const userId = get(req, "user._id");

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}