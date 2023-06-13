import express, { Application } from 'express';

import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();
app.use(cors());
// console.log(app.get('env'))
//perser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application route
app.use('/api/v1/users/', UserRoutes);

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
