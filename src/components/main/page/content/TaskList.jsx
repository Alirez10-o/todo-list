import {Trash2} from "lucide-react";
import {useState} from "react";

export default function TaskList({tasks, removeTask}) {
    const [selectedTasks, setSelectedTasks] = useState([]);

    const handleCheckbox = (taskId) => {
        setSelectedTasks(prevSelected => {
            if (prevSelected.includes(taskId)) {
                return prevSelected.filter(id => id !== taskId);
            } else {
                return [...prevSelected, taskId];
            }
        });
    }

    const handleDelete = () => {
        if (selectedTasks.length === 0) {
            alert("Please check the box before deleting!");
            return;
        }
        selectedTasks.forEach(taskId => removeTask(taskId));
        setSelectedTasks([]);
    };

    return (
        <>
            <div className="w-full flex it justify-end pb-2">
                <button
                    className="p-3 w-1/6 bg-red-600 text-white rounded-lg flex justify-center items-center gap-2 disabled:bg-gray-300 disabled:text-black"
                    onClick={handleDelete}
                    disabled={selectedTasks.length === 0}
                >
                    <span>Delete</span>
                    <Trash2 className="w-5 h-5"/>
                </button>
            </div>
            <ul>
                {tasks.map((item) => (
                    <li key={item.id} className="p-2 pt-4 flex items-center justify-between border-b border-[#219ebc]">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id={`task-${item.id}`}
                                className="w-5 h-5 accent-[#219ebc]"
                                checked={selectedTasks.includes(item.id)}
                                onChange={() => handleCheckbox(item.id)}
                            />
                            <label htmlFor={`task-${item.id}`} className="cursor-pointer">
                                {item.description}
                            </label>
                            <span className="px-2 py-1 text-sm rounded-lg text-white bg-[#219ebc]">
                            {item.category}
                        </span>
                        </div>
                    </li>
                ))}
            </ul>

        </>
    );
}
