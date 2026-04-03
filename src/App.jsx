import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Show Cart Page
  if (showCart) {
    return <CartItem goHome={() => setShowCart(false)} />;
  }

  // Show Product List
  if (showProducts) {
    return (
      <ProductList
        goCart={() => setShowCart(true)}
      />
    );
  }

  // Landing Page
  return (
    <div className="background-image">
      <div className="landing">
        <h1>Paradise Nursery 🌱</h1>
        <p>Welcome to your one-stop shop for beautiful plants!</p>

        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
