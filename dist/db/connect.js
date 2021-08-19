"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const default_1 = __importDefault(require("../config/default"));
const logger_1 = __importDefault(require("../logger"));
function connect() {
    const dbUri = default_1.default.dbUri;
    return mongoose_1.default
        .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
        logger_1.default.info("databaser connected");
    })
        .catch((err) => {
        logger_1.default.error("database Error", err);
        process.exit(1);
    });
}
exports.default = connect;
