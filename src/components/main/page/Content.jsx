import TaskList from "./content/TaskList";

export default function Content({tasks, removeTask, addTask, inputValue, setInputValue, selectedCategory}) {
    const placeholderText = `Add a new task inside ‘${selectedCategory}’ category`;

    return (
        <div className="w-full p-10">
            <header className="text-3xl pb-6">{selectedCategory} tasks</header>
            <div className="flex pb-5">
                <label className="w-full">
                    <input
                        type="text"
                        className="rounded-lg block w-4/5 p-3 bg-gray-100 placeholder-gray-400 text-black"
                        placeholder={placeholderText}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>

                <button
                    className="p-2 w-1/5 text-2xl text-gray-700 rounded-lg hover:bg-gray-300"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>

            <TaskList tasks={tasks} removeTask={removeTask}/>
        </div>
    );
}
