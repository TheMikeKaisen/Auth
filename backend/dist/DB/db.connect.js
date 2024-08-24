"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose_1.default.connect(`${process.env.DB_URL}`);
        console.log("Mongo DB connected to: ", connectionInstance.connection.host);
    }
    catch (error) {
        console.log("Error while connecting to db: ", error);
        process.exit(1);
    }
};
exports.default = ConnectDB;
//# sourceMappingURL=db.connect.js.map