import { useState, useEffect, useMemo } from "react";

import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import ToggleCompleted from "./ToggleCompleted";

export default function TaskContainer() {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("tasks");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [text, setText] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  //creates task element and updates list
  const updateList = () => {
    if (text.trim() !== "") {
      const newTask = {
        id: crypto.randomUUID(),
        text: text,
        completed: false,
        createdAt: Date.now(),
      };
      setList([...list, newTask]);
      setText("");
    }
  };
  //sets list to a new copy that contains everything except task with selected ID
  const deleteTask = (id) => {
    setList((prevList) => prevList.filter((task) => task.id !== id));
  };
  // finnds selected task based on ID and changes the  bool value.
  const toggleComplete = (id) => {
    setList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // creates a new instance of the list
  const filteredList = useMemo(() => {
    const visible = showCompleted
      ? list
      : list.filter((task) => !task.completed);
    return [...visible].sort((a, b) =>
      sortAsc ? a.createdAt - b.createdAt : b.createdAt - a.createdAt
    );
  }, [list, showCompleted, sortAsc]);

  return (
    <>
      <button onClick={() => setSortAsc(!sortAsc)}>
        {sortAsc ? "Vis nyeste" : "Vis eldste"}
      </button>
      <ToggleCompleted
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      />
      <TaskInput text={text} setText={setText} updateList={updateList} />
      <TaskList
        tasks={filteredList}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </>
  );
}
