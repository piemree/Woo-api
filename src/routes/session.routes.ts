import express from "express";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler,
} from "../controller/session.controller";
import { validateRequest, requireUser } from "../middleware";
import { createSessionSchema } from "../schema/session.schema";
const router = express.Router();

router.post(
  "/new",
  validateRequest(createSessionSchema),
  createUserSessionHandler
);

  router.get("/find", requireUser, getUserSessionsHandler);

  router.delete("/delete", requireUser, invalidateUserSessionHandler);


export default router;
