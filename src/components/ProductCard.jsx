export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-blue-500 shadow-md"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        {product.title}
      </h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
        ${product.price}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
