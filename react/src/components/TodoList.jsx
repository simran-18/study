import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  function addTasks() {
    if (!taskName?.trim()) return;
    const newTask = {
      id: Date.now(),
      task: taskName,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setTaskName("");
  }
  function handleDelete(id) {
    setTasks((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }
  function handleCheckboxClick(id) {
    setTasks((prev) => {
      return prev.map((item) => {
        return item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item;
      });
    });
  }
  return (
    <div>
      <div>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter the task"
        />
        <button onClick={addTasks}>Add Task</button>
        <ul>
          {tasks.map((item) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => handleCheckboxClick(item.id)}
                />
                <span
                  style={{
                    textDecoration: item.isCompleted ? "line-through" : "none",
                  }}
                >
                  {item.task}
                </span>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
