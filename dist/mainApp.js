"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const todoRouter_1 = __importDefault(require("./router/todoRouter"));
const mainApp = (app) => {
    try {
        app.use("", todoRouter_1.default);
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "welcome to my Api"
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Error"
                });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.mainApp = mainApp;
