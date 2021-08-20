import Session from "../model/session.model";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ userId, userAgent });
  return session.toJSON();
}
