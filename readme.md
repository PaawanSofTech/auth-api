# User Authentication API Documentation

This API provides endpoints for user authentication, including signup, login, profile management, and email confirmation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Examples](#examples)
- [Testing](#testing)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Signup:** Allows users to register with a username, email, and password.
- **User Login:** Provides authentication with email and password.
- **User Profile:** Retrieves and displays user profile information.
- **Email Confirmation:** Sends a confirmation email upon successful user registration.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- Nodemailer (for sending emails)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd auth-api

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Set up environment variables:**
   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/auth-api
   JWT_SECRET=your_jwt_secret_here
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password

   ```

4. **Start the server:**
   ```bash
   npm start
   
   ```
4. **Server is running on: http://localhost:5000:**

## API Endpoints

### POST /api/signup

Description: Register a new user.

Request Body:
```json
{
  "username": "testuser",
  "email": "testuser@example.com",
  "password": "testpassword"
}

```

Response:
```json
{
  "message": "Signup successful"
}

```

### POST /api/login

Request Body:
```json
{
  "email": "testuser@example.com",
  "password": "testpassword"
}


```

Response:
```json
{
  "token": "your_generated_jwt_token",
  "message": "Login successful"
}


```

### POST /api/profile

Description: Retrieve user profile information.

Authorization: Bearer Token (JWT)
Resonse:
```json
{
  "token": "your_generated_jwt_token",
  "message": "Login successful"
}


```

### Usage

- To use the API, ensure you have the necessary environment variables set up (PORT, MONGO_URI, JWT_SECRET, EMAIL_USER, EMAIL_PASS). Then start the server and make requests to the defined endpoints using tools like Postman or any HTTP client.

# Testing
To test the API, you can use tools like Postman for manual testing or create automated tests using testing frameworks like Mocha and Chai.

Documentation
Additional documentation or references can be added here if needed.

Contributing
Contributions are welcome! Fork the repository, make your changes, and submit a pull request.