import express from 'express';
import { config } from "dotenv";
import ConnectDB from './DB/db.connect';

const app = express()

config()
ConnectDB();

app.listen(3000, ()=> {
    console.log(`Listening on port 3000`)
})

