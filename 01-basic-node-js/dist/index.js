"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
console.log("OS Type:", os_1.default.type());
console.log("platform", os_1.default.platform());
console.log("total memory:", os_1.default.totalmem());
console.log("CPU info:", os_1.default.cpus());
