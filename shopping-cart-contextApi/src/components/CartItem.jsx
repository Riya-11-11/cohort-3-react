import { Trash2 } from "lucide-react";

function CartItem({ item }) {
  console.log(item );

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-5">
      <img
        src={item.image}
        alt={item.name}
        className="w-40 h-40 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold">{item.name}</h2>

        <p className="text-slate-500 mt-2">{item.description}</p>

        <h3 className="text-blue-600 text-2xl font-bold mt-4">₹{item.price}</h3>
      </div>

      <div className="flex flex-col justify-between items-end">
        <button className="text-red-500 hover:text-red-700">
          <Trash2 />
        </button>

        <div className="flex items-center gap-3">
          <button className="bg-slate-200 w-9 h-9 rounded-lg">-</button>

          <span className="font-semibold">1</span>

          <button className="bg-slate-200 w-9 h-9 rounded-lg">+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
