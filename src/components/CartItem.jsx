import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";

function CartItem({ goHome }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Total cart amount
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          {/* Increase / Decrease */}
          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, type: "increase" }))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, type: "decrease" }))
            }
          >
            -
          </button>

          {/* Delete */}
          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Amount: ${totalAmount}</h3>

      {/* Checkout */}
      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      {/* Continue Shopping */}
      <button onClick={goHome}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
