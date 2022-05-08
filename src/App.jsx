import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { About, Home, NotFound, ProductDetails, Products } from './pages';
import './App.css';

export default function App() {
  const [cartIsEmpty] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about/*"
            element={<About />}
          />
          <Route
            path="/products/:id/*"
            element={<ProductDetails />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="/redirect"
            element={<Navigate to="/about" />}
          />
          <Route
            path="/checkout"
            element={
              cartIsEmpty ? (
                <Navigate to="/products" />
              ) : (
                <p className="content">checkout</p>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
