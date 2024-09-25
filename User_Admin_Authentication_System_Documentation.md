
# User and Admin Authentication System

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Installation](#installation)
5. [API Endpoints](#api-endpoints)
6. [Usage](#usage)
7. [Testing with Postman](#testing-with-postman)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview
This project implements a user and admin authentication system using Node.js, Express, and MongoDB. The application provides secure registration and login functionalities, utilizing JSON Web Tokens (JWT) for authentication. The system is designed to differentiate between regular users and admin users.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **JSON Web Tokens (JWT)**: For secure authentication.
- **HTML/CSS**: For front-end user interface.

## Features
- User registration with input validation.
- User login with JWT authentication.
- Responsive and styled front-end forms.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```plaintext
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

## API Endpoints
| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| POST   | `/api/register`        | Register a new user                 |
| POST   | `/api/login`           | Log in and receive a JWT token      |

### Request and Response Examples

#### Register User
**Request**
```http
POST /api/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "yourpassword"
}
```

**Response**
```json
{
  "message": "User registered successfully"
}
```

#### Login User
**Request**
```http
POST /api/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "yourpassword"
}
```

**Response**
```json
{
  "token": "your_jwt_token"
}
```


## Usage
1. Start the server:
   ```bash
   npm start
   ```
2. Access the application via your browser at `http://localhost:5000`.

## Testing with Postman
1. **Register a User**: Send a POST request to `/api/register` with a JSON body containing `username`, `email`, and `password`.
2. **Login User**: Send a POST request to `/api/login` with the registered email and password to receive a JWT token.
3. **Access Protected Route**: Send a GET request to `/api/protected-route` with the JWT token in the Authorization header.

## Contributing
Contributions are welcome! Please create an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
