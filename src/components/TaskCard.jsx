export default function TaskCard({
  id,
  text,
  completed,
  onDelete,
  onToggleComplete,
  createdAt,
}) {
  const date = new Date(createdAt).toLocaleString();

  return (
    <div style={{ border: "solid white" }}>
      <p>{date}</p>
      <h3>{text}</h3>
      <input
        checked={completed}
        id="checkbox"
        type="checkbox"
        onChange={() => onToggleComplete(id)}
      />
      <label htmlFor="checkbox">Complete</label>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
