import express from "express";
import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getUserHandler,
  updateUserHandler,
} from "../controller/user.controller";
import validateRequest from "../middleware/validateRequest";
import {
  createUserSchema,
  deleteUserSchema,
  findUserSchema,
  updateUserSchema,
} from "../schema/user.schema";
const router = express.Router();

router.post("/new", validateRequest(createUserSchema), createUserHandler);

router.get("/find/:id", validateRequest(findUserSchema), getUserHandler);

router.get("/all", getAllUserHandler);

router.put("/update/:id", validateRequest(updateUserSchema), updateUserHandler);

router.delete("/delete/:id", validateRequest(deleteUserSchema), deleteUserHandler);

export default router;
