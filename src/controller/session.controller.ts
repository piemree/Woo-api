import { validateUser } from "../service/user.service";
import { Request, Response } from "express";
import { createAccessToken, createSession } from "../service/session.service";
import { sign } from "../utils/jwt.utils";

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
