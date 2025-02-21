import { response, Router } from "express";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (request, response) => response.send({title: 'get all the subscriptions'}));
subscriptionRouter.get('/:id', (request, response) => response.send({title: 'GET subscriptions details'}));

// subscriptionRouter.post('/', authorize, (request, response) => response.send({title: 'CREATE new subscription'}));
subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (request, response) => response.send({title: 'UPDATE subscription'})); 
subscriptionRouter.delete('/', (request, response) => response.send({title: 'DELETE subscription'}));

// subscriptionRouter.get('/user/:id', (request, response) => response.send({title: 'GET all user subscriptions'}));
subscriptionRouter.get('/user/:id', authorize, getUserSubscription);

subscriptionRouter.put('/:id/cancel', (request, response) => response.send({title: 'CANCEL subscription'}));
subscriptionRouter.get('/upcoming-renewals', (request, response) => response.send({title: 'GET upcoming subscriptions'}));

export default subscriptionRouter;