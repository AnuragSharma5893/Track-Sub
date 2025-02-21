<<<<<<< HEAD
# Track-Sub
=======
Ther are two types of Backend Architecture 

1. Monolithic Architecture 
2. Microservices ARchitecture
3. Serverless Architecture

client-server 
API
ORM'S 
BACKEND ARCHITECTURE


// we are making a subscription tracking API

1. Setting up a monolethic backend
2. use node.js and express.js
3. connecting to a mongodb database
4. securing api with Arcjet
5. Automating subscription tracking with upstash workflows
    
    Onbording workflow:- For example- Duolingo sends you daily reminder but how? using a automation subscription tracking work flow


1.     npx express-generator --no-view --git ./
2.     npm install --save-dev nodemon
3.      npx eslint --init  // linter allow us to write clean code
4.     npm install dotenv // to set up the config file having {.env.production.local} and {.env.development.local}
5.     make a routes folder and then write all the Routes you need.....use HTTPie to test your localhost:5500/api/v1/
    Setting up a Database using MongoDB Atlas(NON-SQL), Neon(for SQL) ->> here we use ATLAS with a Connection method(Drivers -- npm install mongodb for Node.js)
6.  create a folder of Database having monogoose.js file which connects all the the env.js file 
7. MODELS: - show how our data will look like
8. Global Error handing system () --- MIDDLEWARE
9. JWT Authentication  (npm install jsonwebtoken bcryptjs) -- AUTHENTICATIONS 
10.  AUTHORIZATION 
11. Preventing the multiple requests by a single user (BOT ATTACK) --> Arcjet (which is a rate limiter ) (npm i @arcjet/node)

12. Create Subscription in the controllers
13. Reminder WorkFlow (message queuing or Email Reminder) --> Upstash
13. Send Emails Using --> NODEMAILER (npm install nodemailer)
>>>>>>> 6bbc7fe (Subscription-track_api)
