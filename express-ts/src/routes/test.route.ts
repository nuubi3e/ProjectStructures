import TestController from '../controllers/test.controller';
import { Router } from 'express';

const TestRoute = Router();

TestRoute.get('/test', TestController.test);

export default TestRoute;
