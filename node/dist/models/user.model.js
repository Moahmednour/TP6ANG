"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let userSchema = new mongoose_1.default.Schema({
    // id: { type: Number, required: true, unique: true },
    nom: { type: String, required: true },
    cin: { type: Number, required: true },
    email: { type: String, required: true },
});
const User = mongoose_1.default.model("user", userSchema, "user");
exports.default = User;
