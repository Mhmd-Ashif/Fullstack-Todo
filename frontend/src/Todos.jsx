export function Todos(props) {
  function completedLocal(id) {
    if (id == "") {
      return;
    }
    props.completed(id);
  }
  return (
    <div className="outerdiv">
      <ul>
        {props.todos.map((todo) => {
          return (
            <li
              style={{
                marginTop: 20,
              }}
            >
              <div>title : {todo.title}</div>
              <div>description : {todo.description}</div>
              <div>completed : {String(todo.completed)}</div>
              <button
                style={{
                  width: 250,
                  padding: 5,
                  marginTop: 5,
                  textAlign: "center",
                }}
                onClick={function () {
                  completedLocal(todo._id);
                }}
              >
                mark as completed
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
