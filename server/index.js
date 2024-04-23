import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
app.use(cors());
import mongoConnect from './config/db.js';
mongoConnect();

const port = process.env.port || 5000;

import auth from './routes/auth.js';
app.use("/auth",auth);
app.listen(port, ()=>
    console.log(`Server is running on port ${port}`)
);