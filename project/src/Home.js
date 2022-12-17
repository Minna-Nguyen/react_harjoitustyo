import { display } from "@mui/system";
import { useEffect, useState } from "react";
import AddNewTask from "./AddNewTask";
function Home(props) {
  const [tasks, setShowTask] = useState([]);
  const [contexts, setShowContext] = useState([]);
  const [showTasks, setShowTasks] = useState(false);
  const [showContexts, setShowContexts] = useState(false);
  // const [deleteTask, setDeleteTask] = useState("");

  function ShowTasks() {
    // show = true
    if (!showTasks) {
      DisplayAllTasks();
    } else {
      setShowTasks(!showTasks);
    }
    // resset the true to false
    setShowTasks(!showTasks);
  }

  function ShowContexts() {
    // show = true
    if (!showContexts) {
      DisplayContexts();
    } else {
      setShowContexts(!showContexts);
    }
    // resset the true to false
    setShowContexts(!showContexts);
  }
  function DisplayAllTasks() {
    fetch("http://localhost:3010/tasks")
      .then((response) => response.json())
      .then((data) => {
        // to view certain task and its content or whatnot, have to call it array[i].context
        // console.log(data[0].duration);
        // task: id 2 where context are ["homework", "other"]
        // console.log(data[1].context);
        setShowTask(data);
      });
  }

  function DisplayContexts() {
    fetch("http://localhost:3010/contexts")
      .then((res) => res.json())
      .then((data) => {
        setShowContext(data);
      });
  }
  function DeleteTask(id) {
    const toDelete = tasks.find((item) => item.id === id);
    fetch(`http://localhost:3010/tasks/${JSON.parse(toDelete.id)}`, {
      method: "DELETE",
    });
  }

  useEffect(() => {
    DisplayAllTasks();
  });

  return (
    <>
      <div className="container">
        <div className="box">
          <h3>Welcome, get started with your to do list!</h3>
          <button onClick={ShowTasks}>Display all tasks</button>
          {showTasks && (
            <div>
              {tasks.map((task) => (
                <>
                  <li key={task.id}>
                    {task.task}
                    <button
                      key={task.id}
                      onClick={() => {
                        DeleteTask(task.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </>
              ))}
            </div>
          )}
          <br></br>

          <br></br>
          <br></br>
          <button onClick={ShowContexts}>Show context</button>
          {showContexts && (
            <div>
              {contexts.map((context) => (
                <>
                  <li key={context.id}>
                    {context.title}{" "}
                    <button
                      key={context.id}
                      onClick={() => {
                        DeleteTask(context.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </>
              ))}
            </div>
          )}
          <br></br>
          <br></br>
          <AddNewTask></AddNewTask>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Home;
