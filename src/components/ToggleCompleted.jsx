export default function ToggleCompleted({ showCompleted, setShowCompleted }) {
  return (
    <>
      <input
        id="completed"
        type="checkbox"
        checked={showCompleted}
        onChange={() => setShowCompleted(!showCompleted)}
      />
      <label htmlFor="completed">Show Completed</label>
    </>
  );
}
