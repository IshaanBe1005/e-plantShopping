import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 12, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor" },

  { id: 4, name: "Rose", price: 8, category: "Outdoor" },
  { id: 5, name: "Tulip", price: 9, category: "Outdoor" },
  { id: 6, name: "Sunflower", price: 7, category: "Outdoor" },

  { id: 7, name: "Bonsai", price: 20, category: "Special" },
  { id: 8, name: "Cactus", price: 5, category: "Special" },
  { id: 9, name: "Orchid", price: 18, category: "Special" }
];

function ProductList({ goCart }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const isAdded = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <nav>
        <button>Home</button>
        <button>Plants</button>
        <button onClick={goCart}>Cart ({cart.length})</button>
      </nav>

      {["Indoor", "Outdoor", "Special"].map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>

          {plants
            .filter(p => p.category === cat)
            .map(p => (
              <div key={p.id}>
                <h3>{p.name}</h3>
                <p>${p.price}</p>

                <button
                  onClick={() => dispatch(addToCart(p))}
                  disabled={isAdded(p.id)}
                >
                  {isAdded(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;