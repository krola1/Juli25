export default function TaskCard({
  id,
  text,
  completed,
  onDelete,
  onToggleComplete,
}) {
  return (
    <div style={{ border: "solid white" }}>
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
