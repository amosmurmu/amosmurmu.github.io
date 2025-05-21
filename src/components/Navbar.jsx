import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    // Retrieve the saved theme from local storage or use "dark" by default
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []); // Run only once on component mount

  useEffect(() => {
    // Save the current theme to local storage whenever it changes
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Run whenever `theme` changes

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">amos murmu</h1>
        <ul className="flex space-x-6 items-center">
          {["Projects", "Contact","Experience"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-base hover:text-primary"
              >
                {item}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-sm rounded-full"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
