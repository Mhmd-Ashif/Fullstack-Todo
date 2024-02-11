import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { InputComponent } from "./InputComponent";
import { Todos } from "./Todos";

// use useEffect()

function App() {
  const [todos, setTodos] = useState([]);
  // const [isReqSend, setReqSend] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const data = await res.json();
      setTodos(data);
    });
  }, []);

  function fetched(data) {
    if (data) {
      fetch("http://localhost:3000/todos").then(async function (res) {
        const data = await res.json();
        setTodos(data);
      });
    } else {
      console.log("no data is returned");
    }
  }

  async function completed(id) {
    const putData = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const data = await putData.json();
    fetched(data);
  }

  return (
    <>
      <InputComponent fetched={fetched} />
      <Todos todos={todos} completed={completed} />
    </>
  );
}

export default App;
