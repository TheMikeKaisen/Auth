"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_connect_1 = __importDefault(require("./DB/db.connect"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
(0, db_connect_1.default)();
app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});
//# sourceMappingURL=index.js.map