import express from "express";
import config from "./config";
import connect from "./db/connect";
import logger from "./logger";
import { deserializeUser } from "./middleware";
import routes from "./routes";

const port = config.port as number;
const host = config.host as string;

const app = express();

app.use(deserializeUser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, host, () => {
  logger.info(`listening on http://${host}:${port}`);
  connect();
  routes(app)
});

