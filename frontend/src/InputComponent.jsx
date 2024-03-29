import { useState } from "react";

export function InputComponent(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="title"
        style={{
          padding: 5,
          margin: 10,
          textAlign: "center",
          width: 250,
        }}
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <br></br>
      <input
        id="description"
        type="text"
        placeholder="description"
        style={{
          padding: 5,
          margin: 10,
          textAlign: "center",
          width: 250,
        }}
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>
      <br></br>
      <button
        style={{
          padding: 5,
          margin: 10,
          width: 262.91,
          textAlign: "center",
        }}
        onClick={() => {
          document.getElementById("title").value = "";
          document.getElementById("description").value = "";
          fetch("https://fullstack-todo-iota.vercel.app/todo", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          }).then(async function (res) {
            const data = await res.json();
            props.fetched(data);
          });
        }}
      >
        Create Todo
      </button>
    </div>
  );
}
