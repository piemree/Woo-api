"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const default_1 = __importDefault(require("./config/default"));
const connect_1 = __importDefault(require("./db/connect"));
const logger_1 = __importDefault(require("./logger"));
const port = default_1.default.port;
const host = default_1.default.host;
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", function (req, res) { });
app.listen(port, host, () => {
    logger_1.default.info(`listening on http://${host}:${port}`);
    connect_1.default();
});
