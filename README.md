# 🚗 Car Rental System API

A complete, production-ready car rental management system backend built with Node.js, Express, and MongoDB. This RESTful API handles car inventory, customer management, rental bookings, authentication, and role-based access control.

## ✨ Features

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

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: Joi
- **Environment Variables**: dotenv
- **CORS**: Enabled
- **Development**: Nodemon

## 📋 Prerequisites

Before running this application, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) (for API testing)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Bonte4/car-rental-api.git
cd car-rental-api
