# 🛒 Food Cart - React App

A simple and responsive food cart application built using **React + Vite**. This app allows users to browse food items, add them to a cart, and view the total cost dynamically. It's designed with modular components and makes use of React Context API for state management.

## 🔗 Live Demo

[Click here to view the live project](https://food-cart-react-dusky.vercel.app/)

## 📦 GitHub Repository

[View on GitHub](https://github.com/Vishwanathangit/Food-Cart-React.git)

## 📁 Project Structure
<Pre>
  ```
  food-cart-react/
├── public/
├── src/
│ ├── assets/
│ │ └── Product.json # Product data with images and prices
│ ├── components/
│ │ ├── Cart.jsx # Cart component displaying added items
│ │ ├── Cart.css
│ │ ├── Header.jsx # Header with navigation and cart count
│ │ ├── Header.css
│ │ ├── Home.jsx # Home page listing products
│ │ ├── Home.css
│ │ ├── Product.jsx # Individual product card component
│ │ └── Product.css
│ ├── App.jsx # Main app with routing and context
│ ├── App.css
│ ├── index.jsx # React root rendering
│ └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── README.md
  ```
</Pre>

## 🚀 Features

- 🛒 Add/Remove items from the cart
- 📦 Dynamic cart counter in header
- 💰 Auto-updating total price calculation
- 🧠 State managed via React Context
- 🖼️ Data-driven UI using JSON product list
- 🎨 Responsive design using Flexbox

## 🛠️ Installation & Setup

1. **Clone the repository**
   git clone https://github.com/your-username/food-cart-react.git
   cd food-cart-react

2.Install dependencies
  npm install

3.Run the development server
  npm run dev

4.Open http://localhost:5173 in your browser.

🧑‍💻 Tech Stack
React

Vite

React Router DOM

CSS Flexbox

JSON for product data
