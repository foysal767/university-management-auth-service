import express, { Application } from 'express';

import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();
app.use(cors());
// console.log(app.get('env'))
//perser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

//testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   //   throw new ApiError(400, 'ore baba, new error')
//   //   Promise.reject(new Error('Unhandled Promise Rejection'))
//   console.log(x)

// next('ore baba, new error')
// })

//Global error handler
app.use(globalErrorHandler);
export default app;
