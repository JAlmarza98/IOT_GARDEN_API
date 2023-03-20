import express, { Application } from 'express';
import { routes } from './routes';

// Boot express
export const app: Application = express();

// Setup Routes for testing
if( process.env.JEST_WORKER_ID !== undefined) {
    routes(app);
}