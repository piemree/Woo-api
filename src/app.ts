import express from "express";
import config from "./config/default";
import connect from "./db/connect";
import logger from "./logger";
import routes from "./routes";

const port = config.port as number;
const host = config.host as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, host, () => {
  logger.info(`listening on http://${host}:${port}`);
  connect();
  routes(app)
});

