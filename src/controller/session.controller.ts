import { validateUser } from "../service/user.service";
import { Request, Response } from "express";
import { createSession } from "../service/session.service";

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validateUser(req.body);

  if (!user) return res.status(401).send("Invalid username or password");

  const session = await createSession(user._id, req.get("user-agent") || "");
}
