# User Authentication Backend with Node.js and Mogogo DB

This is a user authentication backend built using Node.js and Mogogo DB. It provides secure authentication and user management features for your application.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Configuration](#configuration)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)

## Features

- User registration with email verification.
- User login with JWT (JSON Web Tokens) authentication.
- Password reset functionality.
- Secure password hashing.
- Role-based access control.
- MongoDB integration.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed. Download it from [nodejs.org](https://nodejs.org/).
- Mogogo DB or MongoDB installed and running. You can get it from [mongodb.com](https://www.mongodb.com/).

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/yourusername/express.backend.git
   cd express.backend

   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Create a `.env` file in the project root and configure your environment variables (see [Configuration](#configuration)).

4. Start the server:

   1. to start server without nodemon

   ```shell
   npm start

   ```

   2. to start a server with nodemon

   ```shell
   npm run dev

   ```

Your authentication backend should now be running on `http://localhost:4000`.

## Configuration

You need to set up your environment variables in a `.env` file in the project root. Here's an example `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/mogogodb
JWT_SECRET=mysecretkey
EMAIL_SENDER=email@example.com
EMAIL_PASSWORD=email_password
```

Make sure to replace the placeholder values with your actual configuration.

## Usage

### API Endpoints

This backend provides the following API endpoints:

- `POST /users/register` - Register a new user.
- `GET /users` - get all the users in the database.
- `GET /users/:username` - get a perticular user based on userame

You can explore these endpoints using a tool like Postman or integrate them into your frontend application.
