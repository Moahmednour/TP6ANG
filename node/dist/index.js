"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __importDefault(require("./configs/app.config"));
const db_config_1 = require("./configs/db.config");
const index_1 = __importDefault(require("./routes/index"));
const seeder_1 = require("./seeder");
(0, db_config_1.connect)();
(0, seeder_1.seed)();
app_config_1.default.use("", index_1.default);
app_config_1.default.get("/", (req, res) => {
    res.send("text!");
});
let port = process.env.PORT || 3000;
app_config_1.default.listen(port, () => {
    console.log("Server is running on port " + port);
});
