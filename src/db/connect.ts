import mongoose from "mongoose";
import config from "../config";
import log from "../logger";

export default function connect() {
  const dbUri = config.dbUri as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => {
      log.info("databaser connected");
    })
    .catch((err) => {
      log.error("database Error", err);
      process.exit(1);
    });
}
