/* eslint-disable react/prop-types */
export default function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h4>{todo.description}</h4>
          <button>
            {todo.isCompleted == true ? "Competed" : "Mark as Completed"}
          </button>
        </div>
      ))}
    </>
  );
}
