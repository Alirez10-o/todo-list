"use client";

import Content from "./page/content";
import SideBar from "../SideBar";
import {useEffect, useState} from "react";

export default function Page() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const defaultTasks = [
        {id: 1, description: "Get a new helmet", category: "Uncategorized"},
        {id: 2, description: "Purchase Milk & Corn Flakes", category: "Groceries"},
        {id: 3, description: "Pay mortgage", category: "Payments"},
        {id: 4, description: "Complete Assignments", category: "College"},
        {id: 5, description: "Replace laptop’s screen", category: "Uncategorized"}
    ];

    const [tasks, setTasks] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedTasks = localStorage.getItem("tasks");
            return storedTasks ? JSON.parse(storedTasks) : defaultTasks;
        }
        return defaultTasks;
    });

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks])
    const addTask = () => {
        if (!inputValue.trim()) return alert('Try again!');
        const newTask = {
            id: Date.now(),
            description: inputValue,
            category: selectedCategory === "All" ? "Uncategorized" : selectedCategory
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setInputValue("");
    };


    const removeTask = (taskId) => {
        setTasks(currentTasks => currentTasks.filter((task) => task.id !== taskId));
    };

    const filteredTasks = tasks.filter(task => selectedCategory === "All" || task.category === selectedCategory);

    return (
        <>
            <div className="bg-[#e0e1dd] rounded-lg h-5/6 w-2/3 flex">
                <div className="w-1/5 border-r-2 border-[#219ebc]">
                    <SideBar
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                </div>
                <div className="w-4/5">
                    <Content
                        tasks={filteredTasks}
                        removeTask={removeTask}
                        addTask={addTask}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        selectedCategory={selectedCategory}
                    />
                </div>
            </div>
        </>
    )
}