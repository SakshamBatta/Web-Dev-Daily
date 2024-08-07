export default function CreateTodo() {
  return (
    <>
      <input className="input" type="text" placeholder="title" />
      <input className="input" type="text" placeholder="description" />

      <button>Add a Todo</button>
    </>
  );
}
