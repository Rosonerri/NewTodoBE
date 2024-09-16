"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoModel = new mongoose_1.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    progress: {
        type: Boolean,
    },
    date: {
        type: String,
    },
    done: {
        type: Boolean,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("todos", todoModel);
