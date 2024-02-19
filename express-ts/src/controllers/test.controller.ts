import { Response, Request, NextFunction } from 'express';

const test = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('REQUEST: ' + req);

    res.status(200).json({ message: 'HELLO WORLD' });
  } catch (err) {
    // Passing the error to error middleware
    next(err);
  }
};

// Exporting all functions as default as well as named.
const TestController = { test };
export default TestController;
export { test };
