import CartItem from "../components/CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log("Cart Page:", cart);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">My Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-5">
          {cart.map((item) => {
            //return needed in->{}, not need of return in ->()
            return <CartItem key={item.id} item={item} />;
          })}
        </div>

        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Items</span>
              <span>3</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹6497</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-green-600">FREE</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹6497</span>
            </div>
          </div>

          <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
