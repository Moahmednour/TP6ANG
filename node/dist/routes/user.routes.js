"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
module.exports = (app) => {
    app.get("/employee", user_controller_1.findAll);
    app.get("/employee/:id", user_controller_1.findOne);
    app.post("/employee", user_controller_1.create);
    app.delete("/employee/:id", user_controller_1.remove);
    app.put("/employee/:id", user_controller_1.update);
};
