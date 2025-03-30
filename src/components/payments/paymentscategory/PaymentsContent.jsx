import { useState } from "react";
import TaskList from "../../main/page/content/TaskList";

export default function PaymentsContent() {
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (!inputValue.trim()) return alert('Try again!');
        const newTask = { id: Date.now(), description: inputValue, category: "Payments" };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setInputValue("");
        alert('Task added successfully');
    };

    const removeTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const filteredTasks = tasks.filter(task => task.category === "Payments");

    return (
        <div className="w-full p-9">
            <header className="text-3xl pb-6">Payments Tasks</header>
            <div className="flex pb-5">
                <input 
                    type="text" 
                    className="rounded-lg block w-4/5 p-3 bg-gray-100 placeholder-gray-400 text-black"
                    placeholder="Add a new payment task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="p-3 w-1/5 text-2xl text-gray-700 rounded hover:bg-gray-300" 
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>
            <TaskList tasks={filteredTasks} removeTask={removeTask} />
        </div>
    );
}
