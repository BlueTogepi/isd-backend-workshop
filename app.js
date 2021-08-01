import app from './config/express.js';
import dotenv from 'dotenv';

dotenv.config();

app.listen(parseInt(process.env.PORT), () => console.log('server run listening on port 3000'));