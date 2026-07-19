import { ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const {addToCart} = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="h-60 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-800 mt-3">{product.name}</h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          <Star size={18} fill="#FACC15" stroke="#FACC15" />
          <span className="text-sm font-medium text-gray-700">
            {product.rating}
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">
          <h3 className="text-2xl font-bold text-blue-600">₹{product.price}</h3>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
