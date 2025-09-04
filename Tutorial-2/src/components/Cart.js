import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../utils/Slice/CartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <p className="text-gray-400">
            Add some delicious items to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              {item.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/w_100,h_100,c_fit/${item.imageId}`}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              )}
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-green-600 font-medium">
                  ₹{item.price / 100}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-600 hover:text-red-800 px-3 py-1 rounded-md border border-red-600 hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total:</h3>
          <span className="text-2xl font-bold text-green-600">
            ₹{calculateTotal() / 100}
          </span>
        </div>
        <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-200">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
