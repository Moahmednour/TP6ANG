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
exports.remove = exports.update = exports.create = exports.findOne = exports.findAll = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const search = req.query.search || "";
    const page = parseInt(((_a = req.query.page) === null || _a === void 0 ? void 0 : _a.toString()) || "1");
    const size = parseInt(((_b = req.query.size) === null || _b === void 0 ? void 0 : _b.toString()) || "5");
    user_model_1.default.find().then((data) => {
        res.send(data);
    });
});
exports.findAll = findAll;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    user_model_1.default.findById(id).then((data) => {
        res.send(data);
    });
});
exports.findOne = findOne;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_model_1.default({
        nom: req.body.nom,
        cin: req.body.cin,
        email: req.body.email,
    });
    user.save().then((data) => {
        res.send(data);
    });
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    user_model_1.default.findByIdAndUpdate(id, req.body).then((data) => {
        res.send(data);
    });
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    user_model_1.default.findByIdAndDelete(id).then((data) => {
        res.send(data);
    });
});
exports.remove = remove;
