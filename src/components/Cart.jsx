export default function Cart({ cartItems, clearCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    const message = `Hello! I’d like to order:\n${cartItems
      .map((item) => `• ${item.title} - $${item.price}`)
      .join("\n")}\n\nTotal: $${total}`;
    const whatsappUrl = `https://wa.me/2348105068585?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="p-8 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 rounded shadow"
            >
              <span className="text-gray-900 dark:text-gray-100">
                {item.title}
              </span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                ${item.price}
              </span>
            </div>
          ))}

          <p className="text-lg font-bold mt-4 text-gray-900 dark:text-gray-100">
            Total: ${total.toFixed(2)}
          </p>

          <div className="mt-6 space-x-4">
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Checkout via WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
