import { useEffect, useState } from "react";
import AddNewTask from "./AddNewTask";
import AddNewContext from "./AddNewContext";
function Home(props) {
  const [tasks, setShowTask] = useState([]);
  const [contexts, setShowContext] = useState([]);
  const [showTasks, setShowTasks] = useState(false);
  const [showContexts, setShowContexts] = useState(false);
  // const [deleteTask, setDeleteTask] = useState("");
  const [test, setTest] = useState([]);

  function ShowTasks() {
    // show = true
    if (!showTasks) {
      DisplayAllTasks();
    }
    // else {
    //   setShowTasks(!showTasks);
    // }
    // // resset the true to false
    setShowTasks(!showTasks);
  }

  function ShowContexts() {
    // show = true
    if (!showContexts) {
      DisplayContexts();
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
  function DeleteContext(id) {
    const toDelete = contexts.find((item) => item.id === id);
    fetch(`http://localhost:3010/contexts/${JSON.parse(toDelete.id)}`, {
      method: "DELETE",
    });
  }

  useEffect(() => {
    DisplayAllTasks();
    DisplayContexts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="box">
          <h3>Welcome, get started with your to do list!</h3>
          <button onClick={ShowTasks}>Display all tasks</button>
          <br></br>
          <br></br>
          {showTasks && (
            <>
              <div className="row">
                <div className="edit">
                  {tasks.map((task) => (
                    <li key={task.id}>{task.task}</li>
                  ))}
                </div>
                <div>
                  {tasks.map((task, index) => (
                    <li key={task.id}>
                      <button
                        key={index}
                        onClick={() => {
                          DeleteTask(task.id);
                        }}
                      >
                        Delete {task.task}
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            </>
          )}

          <br></br>
          <AddNewTask></AddNewTask>
          <br></br>
          <br></br>
          <button onClick={ShowContexts}>Show context</button>
          <br></br>
          <br></br>
          {showContexts && (
            <>
              <div className="row">
                <div className="edit">
                  {contexts.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </div>
                <div>
                  {contexts.map((item, index) => (
                    <li key={item.id}>
                      <button
                        key={index}
                        onClick={() => {
                          DeleteContext(item.id);
                        }}
                      >
                        Delete {item.title}
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
