import { Trash2 } from "lucide-react";

export default function TaskList({ tasks, removeTask }) {
    const handleDelete = (taskId) => {
        const checkbox = document.getElementById(`task-${taskId}`); // دریافت چک‌باکس بر اساس ID
        if (checkbox && checkbox.checked) {
            removeTask(taskId); // حذف تسک اگر چک‌باکس تیک خورده باشد
        } else {
            alert("Please check the box before deleting!");
        }
    };

    return (
        <ul>
            {tasks.map((item) => (
                <li key={item.id} className="p-2 flex items-center justify-between border-b-2">
                    <div className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            id={`task-${item.id}`} 
                            className="w-5 h-5 accent-red-500"
                        />
                        <label htmlFor={`task-${item.id}`} className="cursor-pointer">
                            {item.description}
                        </label>
                        <span className="px-2 py-1 text-sm rounded-lg text-white bg-red-500">
                            {item.category}
                        </span>
                    </div>
                    <button 
                        className="p-2 text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(item.id)} // حذف تسک در صورت تیک خوردن چک‌باکس
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </li>
            ))}
        </ul>
    );
}
