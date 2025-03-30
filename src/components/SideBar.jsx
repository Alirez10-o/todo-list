import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { category: "All", id: 1, path: "/" },
    { category: "Groceries", id: 2, path: "/" },
    { category: "College", id: 3, path: "/" },
    { category: "Payments", id: 4, path: "/payments" }
  ];

  const initialActiveButton = buttons.find((btn) => btn.path === location.pathname)?.id || 1;
  const [activeButton, setActiveButton] = useState(initialActiveButton);

  const handleClick = (id, path) => {
    setActiveButton(id);
    navigate(path);
  };

  return (
    <div className="p-10 pt-24 border-r-2">
      <ul>
        {buttons.map((item) => (
          <li key={item.id}>
            <button
              className={`p-3 text-2xl text-gray-700 rounded hover:bg-gray-300 ${
                activeButton === item.id ? "font-bold text-red-500" : ""
              }`}
              onClick={() => handleClick(item.id, item.path)}
            >
              {item.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
