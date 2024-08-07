/* eslint-disable react/prop-types */
export default function Todos({ todos }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h2>{todo.title}</h2>
            <h4>{todo.description}</h4>
            <button>
              {todo.completed == true ? "Completed" : "Mark as completed"}
            </button> 
          </div>
        );
      })}
    </>
  );
}
