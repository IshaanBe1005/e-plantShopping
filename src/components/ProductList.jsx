import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  // Indoor (6)
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 12, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Spider Plant", price: 11, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "ZZ Plant", price: 14, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Pothos", price: 9, category: "Indoor", img: "https://via.placeholder.com/100" },

  // Outdoor (6)
  { id: 7, name: "Rose", price: 8, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 8, name: "Tulip", price: 9, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 9, name: "Sunflower", price: 7, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 10, name: "Lavender", price: 10, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 11, name: "Daisy", price: 6, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 12, name: "Marigold", price: 5, category: "Outdoor", img: "https://via.placeholder.com/100" },

  // Special (6)
  { id: 13, name: "Bonsai", price: 20, category: "Special", img: "https://via.placeholder.com/100" },
  { id: 14, name: "Cactus", price: 5, category: "Special", img: "https://via.placeholder.com/100" },
  { id: 15, name: "Orchid", price: 18, category: "Special", img: "https://via.placeholder.com/100" },
  { id: 16, name: "Succulent", price: 6, category: "Special", img: "https://via.placeholder.com/100" },
  { id: 17, name: "Air Plant", price: 7, category: "Special", img: "https://via.placeholder.com/100" },
  { id: 18, name: "Terrarium", price: 25, category: "Special", img: "https://via.placeholder.com/100" }
];

function ProductList({ goCart }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  // Total items count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isAdded = (id) => cart.some(item => item.id === id);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <button>Home</button>
        <button>Plants</button>
        <button onClick={goCart}>Cart ({totalItems})</button>
      </nav>

      {/* Categories */}
      {["Indoor", "Outdoor", "Special"].map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>

          {plants
            .filter(p => p.category === cat)
            .map(p => (
              <div key={p.id}>
                <img src={p.img} alt={p.name} />
                <h3>{p.name}</h3>
                <p>${p.price}</p>

                <button
                  onClick={() => dispatch(addItem(p))}
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
