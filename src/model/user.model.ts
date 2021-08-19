import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config/default";
import log from "../logger";
export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePasswords(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: "string", required: true, unique: true },
    name: { type: "string", required: true },
    password: { type: "string", required: true },
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this as UserDocument;
  return await bcrypt.compare(candidatePassword, user.password);
};

UserSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  const user = this as UserDocument;

  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;
  return  next();
  } catch (error) {
    log.error(error);
    return
  }
});
const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
