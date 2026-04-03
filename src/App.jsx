import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  if (page === "plants") return <ProductList goCart={() => setPage("cart")} />;
  if (page === "cart") return <CartItem goHome={() => setPage("plants")} />;

  return (
    <div className="landing">
      <div>
        <h1>Paradise Nursery 🌱</h1>
        <button onClick={() => setPage("plants")}>Get Started</button>
      </div>
    </div>
  );
}

export default App;