import {app} from './app';
import * as dotenv from 'dotenv';
import cors from 'cors';
import Database from './lib/database';

dotenv.config()

// Middlewares
app.use(cors());

const database = new Database();
database.init();

const port = process.env.PORT ? process.env.PORT : 5000;

// Start server
app.listen(port, () => {
    console.log('================API================');
    console.log(`Server runnig on port ${port}`);
    console.log('===================================');
});