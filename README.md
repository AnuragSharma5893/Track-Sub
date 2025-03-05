# 🚀 Subscription Tracking API

## 📌 Overview
This project is a **Subscription Tracking API** built with **Node.js** and **Express.js**, leveraging a **monolithic backend architecture**. It securely tracks subscriptions, automates reminders, and ensures smooth user onboarding using **Upstash Workflows**.

## 🏗️ Backend Architectures
1. **Monolithic Architecture**
2. **Microservices Architecture**
3. **Serverless Architecture**
4. **Client-Server API ORM's Backend Architecture**

For this project, we are setting up a **monolithic backend**.

## 🛠️ Tech Stack
- **Node.js** & **Express.js** - Backend framework
- **MongoDB Atlas** - NoSQL Database
- **Arcjet** - API Security & Rate Limiting
- **Upstash Workflows** - Automating Subscription Tracking
- **Nodemailer** - Email Notifications
- **JWT Authentication** - Secure API Access
- **Bcrypt.js** - Password Hashing

---

## 🔧 Setup & Installation
### 1️⃣ Clone the Repository
```bash
  git clone https://github.com/your-username/subscription-track-api.git
  cd subscription-track-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Initialize Express
```bash
npx express-generator --no-view --git ./
```

### 4️⃣ Install Development Tools
```bash
npm install --save-dev nodemon
npx eslint --init  # Linter for clean code
```

### 5️⃣ Setup Configuration Files
```bash
npm install dotenv
```
Create environment files:
```
.env.production.local
.env.development.local
```

### 6️⃣ Set Up Routes
- Create a `routes` folder
- Define API endpoints
- Use `HTTPie` to test API:
  ```bash
  http localhost:5500/api/v1/
  ```

### 7️⃣ Database Connection
#### Using MongoDB Atlas (NoSQL)
- Install MongoDB Driver:
  ```bash
  npm install mongodb
  ```
- Create a `database` folder with `mongoose.js` to connect with environment variables.

### 8️⃣ Models & Global Error Handling
- Define models to structure data.
- Implement **Global Error Handling Middleware** for robust API management.

### 9️⃣ Authentication & Authorization
- Install JWT & Bcrypt.js:
  ```bash
  npm install jsonwebtoken bcryptjs
  ```
- Secure endpoints with **JWT Authentication**.

### 🔟 Prevent Bot Attacks & API Abuse
- Install Arcjet for rate-limiting:
  ```bash
  npm i @arcjet/node
  ```

### 1️⃣1️⃣ Automate Subscription Tracking
- **Create Subscriptions** in the controllers.
- Use **Upstash Workflows** for automated reminders.

### 1️⃣2️⃣ Email Notifications
- Install Nodemailer:
  ```bash
  npm install nodemailer
  ```
- Set up **Email Reminders** for subscriptions.

---

## 🎯 Features
✅ Secure API with **JWT Authentication**  
✅ **Subscription Management** with MongoDB  
✅ **Automated Reminders** using Upstash  
✅ **Rate Limiting** with Arcjet to prevent abuse  
✅ **Global Error Handling Middleware**  
✅ **Email Notifications** using Nodemailer  

---

## 🏃‍♂️ Running the API
```bash
npm start  # Runs the server
npm run dev  # Runs in development mode (nodemon)
```

---

## 📬 API Endpoints
| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| POST   | `/api/v1/auth/register`   | User Registration         |
| POST   | `/api/v1/auth/login`      | User Login                |
| GET    | `/api/v1/subscriptions`   | Get All Subscriptions     |
| POST   | `/api/v1/subscriptions`   | Create Subscription       |
| DELETE | `/api/v1/subscriptions/:id` | Cancel Subscription       |

---

## 📌 Future Enhancements
- ✅ Integrate **WebSockets** for real-time tracking
- ✅ Add **GraphQL** support
- ✅ Implement **Multi-Tier Subscription Plans**

---

## 📜 License
This project is licensed under the **MIT License**.

👨‍💻 **Author:** [Your Name](https://github.com/your-username)  
🌟 If you like this project, consider giving it a ⭐ on GitHub!

