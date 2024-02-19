import express from 'express';
import bodyParser from 'body-parser';
import TestRoutes from './routes/test.route';

const app = express();

// Middleware to pasrse all incoming json data.
app.use(bodyParser.json());

// Route middlewares
app.use(TestRoutes);

export default app;
