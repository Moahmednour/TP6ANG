"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const user_model_1 = __importDefault(require("./models/user.model"));
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Seeding...");
    let count = yield user_model_1.default.countDocuments();
    if (count < 3) {
        let item = new user_model_1.default({
            nom: "jone",
            cin: "23456789",
            email: "test@email.com",
        });
        yield item.save();
        item = new user_model_1.default({
            nom: "Mr",
            cin: "54326789",
            email: "testa@email.com",
        });
        yield item.save();
    }
    console.log("Seeding done");
});
exports.seed = seed;
