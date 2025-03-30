import { useState } from "react";
import TaskList from "./content/TaskList";

export default function Content() {
    const [inputValue, setInputValue] = useState("");

    const defaultTasks = [
        { id: 1, description: "Get a new helmet", category: "Uncategorized" },
        { id: 2, description: "Purchase Milk & Corn Flakes", category: "Groceries" },
        { id: 3, description: "Pay mortgage", category: "Payments" },
        { id: 4, description: "Complete Assignments", category: "College" },
        { id: 5, description: "Replace laptop’s screen", category: "Uncategorized" }
    ];

    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        return storedTasks || defaultTasks;
    });

    const addTask = () => {
        if (!inputValue.trim()) return alert('Try again!'); // تنها بررسی ورودی خالی انجام می‌شود
        const newTask = { id: Date.now(), description: inputValue, category: "Uncategorized" };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
        setInputValue("");
        alert('Task added successfully');
    };

    const removeTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    };

    return (
        <div className="w-full p-9">
            <header className="text-3xl pb-6">All Tasks</header>
            <div className="flex pb-5">
                <input
                    type="text"
                    className="rounded-lg block w-4/5 p-3 bg-gray-100 placeholder-gray-400 text-black"
                    placeholder="Add a new task inside ‘All’ category"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    className="p-3 w-1/5 text-2xl text-gray-700 rounded hover:bg-gray-300"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>

            <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
    );
}
