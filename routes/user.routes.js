import {Router} from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';


import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

// GET /users -> get all users
// GET /users/:id -> get one user by id

// userRouter.get('/', (req,res) => {res.send({title: 'GET all the users'})});
userRouter.get('/', getUsers);

// userRouter.get('/:id', (req,res) => {res.send({title: 'GET one details'})});
userRouter.get('/:id', authorize, getUser);


userRouter.post('/', (req,res) => {res.send({title: 'CREATE NEW user'})});


userRouter.put('/:id', (req,res) => {res.send({title: 'UPDATE user'})});


userRouter.delete('/:id', (req,res) => {res.send({title: 'DELETE user'})});

export default userRouter;