import React from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { Collapse } from "@mui/material";

function AddNewTask(props) {
  const [addTask, setAddTask] = useState("");
  const [addContext, setContext] = useState("");
  const [addDuration, setDuration] = useState("");
  const [successClose, setSuccessClose] = useState(false);
  const [errorClose, setErrorClose] = useState(false);
  let handleSubmit = (e) => {
    // context is one tag or more
    e.preventDefault();
    if (!addContext.includes(",") || addContext.includes(", ")) {
      fetch("http://localhost:3010/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: `${addTask}`,
          //split() separete the string by this separator and create new array
          duration: Number(addDuration),
          context: addContext.split(", "),
          completed: false,
        }),
      }) //then() etc is to fetch the data from the db.json so that we can see if it was successful on the console
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        });
      setSuccessClose(!successClose);
    } else {
      setErrorClose(!errorClose);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Task: </label>
        <input
          type="text"
          required
          placeholder="Add new task"
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
        ></input>
        <br></br>
        <label>Context: </label>
        <input
          type="text"
          required
          placeholder="Add context"
          value={addContext}
          onChange={(e) => setContext(e.target.value)}
        ></input>
        <br></br>
        <label>Duration: </label>
        <input
          type="text"
          required
          placeholder="Add duration"
          value={addDuration}
          onChange={(e) => setDuration(e.target.value)}
        ></input>{" "}
        <br></br>
        <br></br>
        <input type="submit" value={"Add task"}></input>
      </form>

      <Collapse in={successClose}>
        <Alert
          severity="success"
          onClick={() => {
            setSuccessClose(!successClose);
          }}
          onClose={() => {}}
        >
          You added new task: {addTask} <br></br>
          You added context: {addContext} <br></br>
          You added duration: {addDuration}
        </Alert>
      </Collapse>
      <Collapse in={errorClose}>
        <Alert
          severity="error"
          onClick={() => {
            setErrorClose(!errorClose);
          }}
          onClose={() => {}}
        >
          Please add space between contexts after comma (,)
        </Alert>
      </Collapse>
    </>
  );
}
export default AddNewTask;
