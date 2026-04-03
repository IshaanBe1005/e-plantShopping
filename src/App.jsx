import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  // Navigate to Plants page
  if (page === "plants") {
    return <ProductList goCart={() => setPage("cart")} />;
  }

  // Navigate to Cart page
  if (page === "cart") {
    return <CartItem goHome={() => setPage("plants")} />;
  }

  // Landing Page
  return (
    <div className="background-image">
      <div className="landing">
        <h1>Paradise Nursery 🌱</h1>
        <p>Welcome to your one-stop shop for beautiful plants!</p>
        <button onClick={() => setPage("plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
