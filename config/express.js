import express, { json, urlencoded } from 'express';
import postRoutes from '../app/routes/post.routes.js';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/', postRoutes);

export default app;