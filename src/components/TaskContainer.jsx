import { useState } from "react";

import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import ToggleCompleted from "./ToggleCompleted";

export default function TaskContainer() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  //creates task element and updates list
  const updateList = () => {
    if (text.trim() !== "") {
      const newTask = {
        id: crypto.randomUUID(),
        text: text,
        completed: false,
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
  const filteredList = showCompleted
    ? list
    : list.filter((task) => !task.completed);

  return (
    <>
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
