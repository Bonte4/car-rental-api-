# 🚗 Car Rental System API

A complete, production-ready car rental management system backend built with Node.js, Express, and MongoDB. This RESTful API handles car inventory, customer management, rental bookings, authentication, and role-based access control.

---

## 📋 TABLE OF CONTENTS
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Authentication](#-authentication)
- [Role-Based Access](#-role-based-access)
- [Error Handling](#-error-handling)
- [Testing with Postman](#-testing-with-postman)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ FEATURES

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (Customer/Admin)
- Secure password hashing with bcrypt
- Protected routes and endpoints

### 🚘 Car Management
- Complete CRUD operations for cars
- Filter cars by category, price, availability, fuel type, transmission
- Track car availability in real-time
- Car image management
- Detailed car specifications

### 👥 Customer Management
- User registration and login
- Profile management
- Secure session handling
- Customer rental history

### 📅 Rental System
- Create and manage rental bookings
- Automatic price calculation based on rental duration
- Date validation to prevent overlapping bookings
- Multiple rental statuses (pending, confirmed, active, completed, cancelled)
- Payment status tracking
- Pickup and return location management

### ✅ Input Validation
- Comprehensive data validation using Joi
- Proper error messages
- Data sanitization

---

## 🛠️ TECH STACK

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Joi | Input validation |
| dotenv | Environment variables |
| cors | Cross-origin resource sharing |
| nodemon | Development auto-restart |

---

## 📋 PREREQUISITES

Before running this application, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Git** - [Download](https://git-scm.com/)
- **Postman** (optional, for API testing) - [Download](https://www.postman.com/)

---

## 🚀 INSTALLATION

### 1. Clone the Repository

```bash
git clone https://github.com/Bonte4/car-rental-api.git
cd car-rental-api
2. Install Dependencies
bash
npm install
3. Configure Environment Variables
Create a .env file in the root directory (see next section for content)

4. Start MongoDB
Local MongoDB:

bash
# Start MongoDB service
mongod

# On Windows, you might need:
net start MongoDB
Or use MongoDB Atlas:

Create a free cluster at MongoDB Atlas

Get your connection string and add it to .env

5. Run the Application
Development mode:

bash
npm run dev
Production mode:

bash
npm start
The server will start at http://localhost:3000

🌍 ENVIRONMENT VARIABLES
Create a .env file in the root directory:

env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/car-rental
# For MongoDB Atlas use:


# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# Optional: Email Configuration (for future features)
# EMAIL_SERVICE=gmail
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
📁 PROJECT STRUCTURE
text
car-rental-api/
├── controllers/           # Request handlers
│   ├── carController.js
│   ├── customerController.js
│   └── rentalController.js
├── models/                # Database models
│   ├── car.js
│   ├── customer.js
│   └── rental.js
├── routes/                # API routes
│   ├── carRoutes.js
│   ├── customerRoutes.js
│   └── rentalRoutes.js
├── validations/           # Input validation schemas
│   ├── carValidation.js
│   ├── customerValidation.js
│   └── rentalValidation.js
├── middleware/            # Custom middleware
│   └── auth.js
├── .env                   # Environment variables
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies
├── server.js             # Entry point
└── README.md             # Documentation
📚 API DOCUMENTATION
Base URL
text
http://localhost:3000/api
🔐 AUTHENTICATION ENDPOINTS
Register a new customer
http
POST /api/customers/register
Request Body:

json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA"
  },
  "licenseNumber": "DL123456789",
  "dateOfBirth": "1990-01-01"
}
Response:

json
{
  "success": true,
  "message": "Registration successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "data": {
    "id": "65f1a2b3c4d5e6f7a8b9c0d1",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
Login
http
POST /api/customers/login
Request Body:

json
{
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "data": {
    "id": "65f1a2b3c4d5e6f7a8b9c0d1",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
Get Current User Profile
http
GET /api/customers/profile
Authorization: Bearer <token>
🚘 CAR ENDPOINTS
Get All Cars (with filters)
http
GET /api/cars?category=suv&minPrice=50&maxPrice=200&available=true&fuelType=petrol&transmission=automatic
Parameter	Type	Description
category	string	Filter by category (economy, compact, midsize, suv, luxury, van)
available	boolean	Filter by availability (true/false)
minPrice	number	Minimum daily rate
maxPrice	number	Maximum daily rate
fuelType	string	Filter by fuel type (petrol, diesel, electric, hybrid)
transmission	string	Filter by transmission (manual, automatic)
Response:

json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "65f1a2b3c4d5e6f7a8b9c0d2",
      "brand": "Toyota",
      "model": "Camry",
      "year": 2023,
      "licensePlate": "ABC-1234",
      "dailyRate": 75,
      "isAvailable": true,
      "category": "midsize",
      "fuelType": "hybrid",
      "transmission": "automatic",
      "seats": 5
    }
  ]
}
Get Single Car
http
GET /api/cars/:id
Add New Car (Admin only)
http
POST /api/cars
Authorization: Bearer <admin_token>
Request Body:

json
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2023,
  "licensePlate": "ABC-1234",
  "dailyRate": 75,
  "category": "midsize",
  "fuelType": "hybrid",
  "transmission": "automatic",
  "seats": 5,
  "description": "Comfortable family sedan with excellent fuel economy"
}
Update Car (Admin only)
http
PUT /api/cars/:id
Authorization: Bearer <admin_token>
Delete Car (Admin only)
http
DELETE /api/cars/:id
Authorization: Bearer <admin_token>
Update Car Availability (Admin only)
http
PATCH /api/cars/:id/availability
Authorization: Bearer <admin_token>
Request Body:

json
{
  "isAvailable": false
}
📅 RENTAL ENDPOINTS
Create a Rental
http
POST /api/rentals
Authorization: Bearer <token>
Request Body:

json
{
  "customer": "65f1a2b3c4d5e6f7a8b9c0d1",
  "car": "65f1a2b3c4d5e6f7a8b9c0d2",
  "startDate": "2024-02-01",
  "endDate": "2024-02-05",
  "pickupLocation": "Airport Branch",
  "returnLocation": "Downtown Branch",
  "paymentMethod": "credit_card",
  "additionalNotes": "Need child seat"
}
Response:

json
{
  "success": true,
  "data": {
    "_id": "65f1a2b3c4d5e6f7a8b9c0d3",
    "customer": {
      "_id": "65f1a2b3c4d5e6f7a8b9c0d1",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com"
    },
    "car": {
      "_id": "65f1a2b3c4d5e6f7a8b9c0d2",
      "brand": "Toyota",
      "model": "Camry",
      "licensePlate": "ABC-1234"
    },
    "startDate": "2024-02-01T00:00:00.000Z",
    "endDate": "2024-02-05T00:00:00.000Z",
    "totalPrice": 375,
    "status": "pending",
    "paymentMethod": "credit_card"
  }
}
Get Customer's Rentals
http
GET /api/rentals/my-rentals
Authorization: Bearer <token>
Get Single Rental
http
GET /api/rentals/:id
Authorization: Bearer <token>
Cancel Rental
http
PATCH /api/rentals/:id/cancel
Authorization: Bearer <token>
Update Rental Status (Admin only)
http
PATCH /api/rentals/:id/status
Authorization: Bearer <admin_token>
Request Body:

json
{
  "status": "confirmed"
}
Status	Description
pending	Initial state after booking
confirmed	Booking confirmed by admin
active	Rental period started
completed	Rental period ended
cancelled	Booking cancelled
Update Payment Status (Admin only)
http
PATCH /api/rentals/:id/payment
Authorization: Bearer <admin_token>
Request Body:

json
{
  "paymentStatus": "paid"
}
Get All Rentals (Admin only)
http
GET /api/rentals?status=pending&startDate=2024-02-01
Authorization: Bearer <admin_token>
🔒 AUTHENTICATION
The API uses JWT (JSON Web Tokens) for authentication. To access protected endpoints, include the token in the Authorization header:

http
Authorization: Bearer <your_jwt_token>
How to Get a Token
Register a new user or login with existing credentials

Copy the token from the response

Add it to subsequent requests

👥 ROLE-BASED ACCESS
Customer Role
View all cars

Register/Login

Create rentals

View own rentals

Cancel own rentals (if pending)

Update own profile

Admin Role (extends customer permissions)
Add new cars

Update car details

Delete cars

View all rentals

Update any rental status

View all customers

Update/Delete any customer

🚦 ERROR HANDLING
The API returns appropriate HTTP status codes:

Status Code	Description
200	Success
201	Created successfully
400	Bad request (validation error)
401	Unauthorized (invalid/missing token)
403	Forbidden (insufficient permissions)
404	Resource not found
500	Internal server error
Error Response Format:

json
{
  "success": false,
  "message": "Error description here"
}
Common Error Examples:

json
// Validation Error (400)
{
  "success": false,
  "message": "\"email\" must be a valid email"
}

// Authentication Error (401)
{
  "success": false,
  "message": "Please authenticate"
}

// Authorization Error (403)
{
  "success": false,
  "message": "Access denied. Admin privileges required."
}

// Not Found Error (404)
{
  "success": false,
  "message": "Car not found"
}
🧪 TESTING WITH POSTMAN
1. Import Collection
Create a new collection in Postman named "Car Rental API"

2. Set Up Environment Variables
Create a new environment with:

Variable	Initial Value	Current Value
base_url	http://localhost:3000/api	http://localhost:3000/api
token		(will be set after login)
3. Test Flow
Step 1: Register a Customer

text
POST {{base_url}}/customers/register
Body: raw JSON (see example above)
Step 2: Login

text
POST {{base_url}}/customers/login
Body: { "email": "john@example.com", "password": "password123" }
Step 3: Set Token

After login, copy the token from response

Set it as token environment variable in Postman

Step 4: Test Protected Endpoints

text
GET {{base_url}}/customers/profile
Headers: Authorization: Bearer {{token}}
4. Test Script Example
Create a test script in Postman:

javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has success true", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.be.true;
});

pm.test("Response contains data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data).to.not.be.empty;
});
🚀 DEPLOYMENT
Deploy to Heroku
bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create Heroku app
heroku create car-rental-api-yourname

# Add MongoDB Atlas add-on or set environment variable
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
heroku config:set JWT_SECRET=your_secret_key

# Deploy
git push heroku main

# Open app
heroku open
Deploy to Railway
Push code to GitHub

Go to Railway.app

Click "New Project" → "Deploy from GitHub"

Select your repository

Add environment variables

Deploy!

📦 DEPENDENCIES
json
{
  "name": "car-rental-system",
  "version": "1.0.0",
  "description": "Car Rental System Backend API",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "joi": "^17.10.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
🤝 CONTRIBUTING
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Contribution Guidelines
Write clear commit messages

Update documentation if needed

Add tests for new features

Follow existing code style

Ensure all tests pass

📝 LICENSE
This project is licensed under the MIT License - see below:

text
MIT License

Copyright (c) 2024 Bonte4

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
📧 CONTACT
Your Name - @your_twitter - email@example.com

Project Link: https://github.com/Bonte4/car-rental-api

Report Issues: https://github.com/Bonte4/car-rental-api/issues

🚀 FUTURE ENHANCEMENTS
Email notifications for booking confirmation

Payment gateway integration (Stripe/PayPal)

Real-time car availability calendar

Admin dashboard with analytics

Customer reviews and ratings

Late return fee calculation

Mobile app (React Native/Flutter)

Multi-language support

Caching with Redis for better performance

Docker containerization

CI/CD pipeline with GitHub Actions

Swagger/OpenAPI documentation

⭐ SUPPORT
If you found this project helpful, please give it a ⭐ on GitHub!

Made with ❤️ by Bonte4

text

This single-file README is comprehensive and includes everything needed to understand, install, and use your Car Rental System API. It's well-organized with emojis, tables, code blocks, and clear sections for easy navigation.
