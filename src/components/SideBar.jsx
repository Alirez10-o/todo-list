import { useNavigate } from "react-router-dom";

export default function SideBar( {selectedCategory, onCategoryChange}) {
  const navigate = useNavigate();

  const buttons = [
    { category: "All", id: 1, path: "/" },
    { category: "Groceries", id: 2, path: "/" },
    { category: "College", id: 3, path: "/" },
    { category: "Payments", id: 4, path: "/" }
  ];

    const handleClick = (category, path) => {
        onCategoryChange(category);
        navigate(path);
    };

  return (
    <div className="p-10">
      <ul>
        {buttons.map((item) => (
          <li key={item.id}>
            <button
              className={`p-3 text-2xl text-gray-700 rounded-lg hover:bg-gray-300 ${
                  selectedCategory === item.category ? "font-bold text-[#219ebc]" : ""
              }`}
              onClick={() => handleClick(item.category, item.path)}
            >
              {item.category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
