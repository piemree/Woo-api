import express from "express";
import { createUserSessionHandler } from "../controller/session.controller";
import validateRequest from "../middleware/validateRequest";
import { createSessionSchema } from "../schema/session.schema";
const router = express.Router();

router.post(
  "/api/sessions",
  validateRequest(createSessionSchema),
  createUserSessionHandler
);

export default router;
