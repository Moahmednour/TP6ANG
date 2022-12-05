import express from "express";

const router = express.Router();
require("./user.routes")(router);

export default router;
