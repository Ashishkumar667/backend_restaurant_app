# Backend Restaurant App

This is the backend for a restaurant management application. The project provides essential functionalities such as managing restaurant orders, menu items, and customer information. It is designed to handle the server-side logic for a restaurant’s operations.

## Features

- **Order Management**: Handles customer orders, including order creation, updating, and tracking.
- **Menu Management**: Manages the restaurant's menu, allowing the addition, deletion, and modification of menu items.
- **Customer Management**: Manages customer data, including contact information and order history.
- **Authentication**: Provides user authentication for restaurant staff using secure login mechanisms.
- **Database**: Uses a database (e.g., MongoDB or PostgreSQL) to persist data related to orders, menu items, and customers.

## Technologies Used

- **Node.js**: Backend runtime for building the server.
- **Express.js**: Framework for building the RESTful API.
- **MongoDB** (or **PostgreSQL**): Database for storing restaurant data.
- **JWT (JSON Web Token)**: For secure user authentication.
- **Mongoose** (if using MongoDB): ODM for interacting with MongoDB.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ashishkumar667/backend_restaurant_app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd backend_restaurant_app
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables for your database and other configurations in a `.env` file:
    ```env
    DATABASE_URL=<your_database_url>
    JWT_SECRET=<your_jwt_secret>
    ```

5. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### 1. **Create Order**
   - **Endpoint**: `POST /api/orders`
   - **Description**: Creates a new order for a customer.
   - **Request Body**:
     ```json
     {
       "customerId": "12345",
       "items": [{"itemId": "1", "quantity": 2}],
       "totalAmount": 500
     }
     ```

### 2. **Get Menu**
   - **Endpoint**: `GET /api/menu`
   - **Description**: Retrieves the restaurant's menu.
   
### 3. **Update Menu Item**
   - **Endpoint**: `PUT /api/menu/:id`
   - **Description**: Updates the details of a specific menu item.
   - **Request Body**:
     ```json
     {
       "name": "Pizza",
       "price": 250
     }
     ```

### 4. **User Authentication**
   - **Endpoint**: `POST /api/auth/login`
   - **Description**: Authenticates a user and returns a JWT token.
   - **Request Body**:
     ```json
     {
       "username": "staff1",
       "password": "password123"
     }
     ```

## Folder Structure
backend_restaurant_app/ config/ ##Configuration files (e.g., database configuration, server settings) │
1.db.js # Database connection configuration │ 
2.config.js # Additional configurations (e.g., JWT secret, server settings) 
3. controllers/ # API endpoint controllers │ 
4. orderController.js # Handles order-related logic (creating, updating, fetching orders) │ 
5. menuController.js # Handles menu-related logic (adding, updating, fetching menu items) │ 
6.authController.js # Handles user authentication logic (login, signup)
7. models/ # Mongoose models (if using MongoDB) │ 
8. Order.js # Order model, defines the schema for orders │
9. Menu.js # Menu model, defines the schema for menu items │
10. User.js # User model, defines the schema for users (staff, admins) 
11. routes/ # API route definitions │  orderRoutes.js # Defines routes related to order management (e.g., POST, GET, PUT) │
12. menuRoutes.js # Defines routes related to menu management (e.g., GET, PUT, DELETE) │ 
13. authRoutes.js # Defines routes related to authentication (e.g., login, signup)
14. utils/ # Utility functions │  authUtils.js # Helper functions for authentication (e.g., JWT token generation, token verification) │ 

15. errorUtils.js # Utility for error handling and custom error responses ├── .env # Environment variables for database, JWT secret, and other configurations
16. server.js # Main server file to start the app and set up middlewares └── package.json # Project dependencies and scripts (e.g., start, install)



## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thank you to [Express.js](https://expressjs.com/) for providing a robust web framework.
- Thanks to [MongoDB](https://www.mongodb.com/) for the NoSQL database solution.

