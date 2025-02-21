import express from 'express';
import {DB_URI, PORT} from './config/env.js';;
import cookieParser from 'cookie-parser';


import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.route.js';
import connectToDB from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';


const app = express();
// build in express middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); // help us to process the data send my the html form in a simple formate
app.use(cookieParser());

app.use('/api/v1/auth', authRouter); // http://localhost:3000/api/v1/auth/sign-up
app.use('/api/v1/users', userRouter); // http://localhost:3000/api/v1/users
app.use('/api/v1/subscriptions', subscriptionRouter); // http://localhost:3000/api/v1/subscriptions
app.use('/api/v1/workflows', workflowRouter);

app.use(errorMiddleware);
app.use(arcjetMiddleware);

app.get('/', (req, res) => {
    res.send('welcome to the Sub Track APi');
});

app.listen(PORT, async () =>{
    console.log(`Server is running on port: http://localhost:${PORT}`);
    await connectToDB();
});

export default app;