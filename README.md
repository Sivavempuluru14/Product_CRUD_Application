# 🛍️ Product CRUD Application (MERN Stack)

## 📌 Overview

The **Product CRUD Application** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to manage product information efficiently. It provides complete **Create, Read, Update, and Delete (CRUD)** functionality through a clean and responsive user interface.

Users can add new products, view all available products, edit existing product details, and delete products when they are no longer needed. The frontend is built using **React.js**, while the backend uses **Node.js** and **Express.js** to expose RESTful APIs. Product data is securely stored in **MongoDB**, making the application a practical example of full-stack development and REST API integration.


---

## ✨ Features

* View all products
* Add a new product
* Update existing product details
* Delete products
* Responsive and clean user interface
* RESTful API integration
* MongoDB database connectivity
* Real-time data updates
* User-friendly alert messages

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Development Tools

* Vite
* Nodemon
* Git
* GitHub
* VS Code

---

## 📂 Project Structure

```
Product_CRUD_Application/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Sivavempuluru14/Product_CRUD_Application.git
```

### 2. Navigate to the Project

```bash
cd Product_CRUD_Application
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the **backend** folder and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 6. Run Backend

```bash
cd backend
npm run dev
```

### 7. Run Frontend

```bash
cd frontend
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| POST   | `/api/products`     | Create a new product |
| PUT    | `/api/products/:id` | Update a product     |
| DELETE | `/api/products/:id` | Delete a product     |


---

## 🎯 Learning Outcomes

Through this project, I gained hands-on experience with:

* MERN Stack Development
* REST API Development
* CRUD Operations
* MongoDB Integration
* Express Routing
* React Components
* Axios API Calls
* State Management
* Environment Variables
* Git & GitHub Version Control

---

## 👨‍💻 Author

**Siva Vempuluru**

GitHub:
https://github.com/Sivavempuluru14

---

