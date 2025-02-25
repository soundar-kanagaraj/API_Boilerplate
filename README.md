# Node.js API Boilerplate with Express.js

A simple Node.js API Boilerplate with JWT Authentication, MongoDB integration, and Swagger documentation.

## 🚀 Features

- Express.js server
- JWT Authentication
- MongoDB with Mongoose
- Swagger API documentation
- Helmet, Compression & Rate Limiting for security
- Morgan logging

## 📦 Getting Started

### Prerequisites

- Node.js >= 14.x
- MongoDB instance

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/soundar-kanagaraj/nodejs-api-boilerplate.git
   cd nodejs-api-boilerplate
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables (`.env`):**

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server:**

   ```bash
   npm run dev
   ```

   The API will be running on `http://localhost:5000`.

## 📖 API Documentation

Access the Swagger UI at:

```
http://localhost:5000/api-docs
```

## 🧪 Running Tests

Run Jest tests:

```bash
npm test
```

## 📄 License

This project is licensed under the **MIT License**.

---
