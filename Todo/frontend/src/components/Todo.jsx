import { useState } from "react";

export default function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const newTodo = { title, description };
    try {
      const response = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (response.ok) {
        window.alert("Todo added successfully");
      } else {
        window.alert("Unable to add Todo at this time");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter the title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Title</p>
      <input
        type="text"
        placeholder="Enter the description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <p>Description</p>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
