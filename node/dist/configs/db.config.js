"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uri = process.env.MONGODB_CONN || "mongodb://localhost:27017/tp6";
const connect = () => {
    mongoose_1.default.connect(uri, (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Successfully Connected!");
        }
    });
};
exports.connect = connect;
