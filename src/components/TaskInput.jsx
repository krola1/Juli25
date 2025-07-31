export default function TaskInput({ text, setText, updateList }) {
  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            updateList();
          }
        }}
      />
      <button onClick={updateList}>add</button>
    </>
  );
}
