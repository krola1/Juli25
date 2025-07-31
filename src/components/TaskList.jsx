import TaskCard from "./TaskCard";
export default function TaskList({ tasks, onDelete, onToggleComplete }) {
  console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          {...task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}
