import {Router} from 'express';
import { signIn, signOut, signUp } from '../controllers/auth.controllers.js';


const authRouter = Router();
// PATH : //api/v1/auth/sign-up (POST) -> POST BODY {name, email , password} -> then it CREATES a new user

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);


export default authRouter;