import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Explore Products
          </h1>
          <p className="text-slate-500 mt-2">
            Find your favourite products.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          className="border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-80"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;