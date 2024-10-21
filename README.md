# Auth and Todo List Application

This project is a basic authentication and todo list application using `Express.js` for the backend, `JWT` (JSON Web Token) for authentication, and a simple frontend built with HTML, CSS, and JavaScript.

## Features

- **User Authentication**: Users can sign up, sign in, and access a protected todo list.
- **JWT-based Authentication**: The application uses JWT to secure endpoints.
- **Todos**: Logged-in users can manage their todo list (add, delete).
- **Persistent Login**: The user's login status is persisted using localStorage on the client-side.

## Tech Stack

- **Backend**: Node.js, Express.js, JWT
- **Frontend**: HTML, CSS, JavaScript (using Axios for HTTP requests)
- **Libraries**: 
  - `express`: Web framework for Node.js
  - `jsonwebtoken`: For handling JWT-based authentication
  - `axios`: To handle API requests from the frontend

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Basic knowledge of JavaScript, Express, and JWT

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/auth-todo-app.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd auth-todo-app
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    node app.js
    ```

5. **Open the app in your browser**: Go to `http://localhost:3000`

### API Endpoints

1. **POST /signup**
   - Registers a new user
   - Request body:
     ```json
     {
       "username": "your_username",
       "password": "your_password"
     }
     ```
   - Response:
     ```json
     {
       "msg": "You signed up"
     }
     ```

2. **POST /signin**
   - Logs in a user and returns a JWT token
   - Request body:
     ```json
     {
       "username": "your_username",
       "password": "your_password"
     }
     ```
   - Response:
     ```json
     {
       "token": "your_jwt_token"
     }
     ```

3. **GET /me**
   - Retrieves user information (protected route)
   - Headers: 
     ```
     token: your_jwt_token
     ```
   - Response:
     ```json
     {
       "username": "your_username",
       "password": "your_password"
     }
     ```

4. **GET /todos**
   - Fetches the todo list (protected route)
   - Headers:
     ```
     token: your_jwt_token
     ```
   - Response:
     ```json
     {
       "msg": "todos list"
     }
     ```

### Frontend

The frontend is built using HTML, CSS, and vanilla JavaScript. It provides three main views:
1. **Sign Up**: For registering a new user.
2. **Sign In**: For authenticating a user.
3. **Todo List**: Allows the user to add, delete, and manage their todos after logging in.

The frontend communicates with the backend using the `axios` library for making HTTP requests.

### How to Use

1. **Sign Up**: Enter a username and password to create an account.
2. **Sign In**: After signing up, use the same credentials to log in.
3. **Manage Todos**: Once logged in, you can view and manage your todos.
4. **Logout**: Clicking "Logout" will clear the token and return you to the sign-up page.

### Project Structure

.
├── index.js              # Backend code (Express server, routes)
├── index.html          # Frontend code (HTML, CSS, JS)
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation

### Future Improvements

- Add validation for form inputs.
- Implement full CRUD functionality for the todos (currently only supports addition and deletion).
- Add password hashing (e.g., using bcrypt) for better security.
