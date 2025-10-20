import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";
import phone3 from "../assets/phone3.jpg";
import phone4 from "../assets/phone4.jpg";
import phone5 from "../assets/phone5.jpg";
import phone6 from "../assets/phone6.jpg";
import phone7 from "../assets/phone7.jpg";
import phone8 from "../assets/phone8.jpg";
import phone9 from "../assets/phone9.jpg";

const allProducts = [
  { title: "iPhone 15 Pro", price: 999, image: phone1 },
  { title: "Samsung Galaxy S24", price: 899, image: phone2 },
  { title: "Google Pixel 8", price: 799, image: phone3 },
  { title: "OnePlus 12", price: 749, image: phone4 },
  { title: "Xiaomi Mi 14", price: 699, image: phone5 },
  { title: "Tecno Phantom X2", price: 499, image: phone6 },
  { title: "Infinix Zero Ultra", price: 459, image: phone7 },
  { title: "Oppo Find X6", price: 699, image: phone8 },
  { title: "Huawei P60 Pro", price: 899, image: phone9 },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => setCart([...cart, product]);
  const clearCart = () => setCart([]);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredProducts = allProducts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : ""}>
      <Navbar
        cartCount={cart.length}
        onSearch={setSearchTerm}
        toggleDarkMode={toggleDarkMode}
      />

      <section
        id="products"
        className="py-20 bg-gray-100 dark:bg-gray-900 text-center px-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12">
          Featured Smartphones
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <Cart cartItems={cart} clearCart={clearCart} />
    </div>
  );
}
