import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import {app} from './app';
import Database from './lib/dataBase';
import CronJob from './lib/cronJobs';
import {routes} from "./routes";

dotenv.config()

// Middlewares
app.use(cors());
app.use(express.json());

// DB connection
const database = new Database();
database.init();

// Start CronJobs
const cronJobs = new CronJob();
cronJobs.initScheduledJobs();

// Setup Routes
routes(app);

const port = process.env.PORT ? process.env.PORT : 5000;

// Start server
app.listen(port, () => {
    console.log('================API================');
    console.log(`Server runnig on port ${port}`);
    console.log('===================================');
});