import { useState } from "react";

export default function Navbar({ cartCount, onSearch, toggleDarkMode }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center bg-blue-600 dark:bg-gray-800 text-white px-6 py-4 shadow">
      <h1 className="text-2xl font-bold">📱 GadgetsMart</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
        className="px-3 py-2 rounded-md text-gray-800 outline-none w-48 md:w-72"
      />

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-100 text-gray-800 px-3 py-1 rounded hover:bg-gray-200 transition"
        >
          🌗
        </button>

        <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">
          🛒 Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}
