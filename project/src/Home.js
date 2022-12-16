import { useState } from "react";
import AddNewTask from "./AddNewTask";
function Home(props) {
  const [tasks, setShowTask] = useState([]);
  const [contexts, setShowContext] = useState([]);
  const [showTasks, setShowTasks] = useState(false);
  const [showContexts, setShowContexts] = useState(false);
  const [deleteTask, setDeleteTask] = useState("");
  const [remove, setRemove] = useState("");
  let [test, setTest] = useState([]);

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
  function DeleteById() {
    fetch("http://localhost:3010/tasks")
      .then((response) => response.json())
      .then((data) => {
        // to view certain task and its content or whatnot, have to call it array[i].context
        // console.log(data[0].duration);
        // task: id 2 where context are ["homework", "other"]
        // console.log(data[1].context);
        setTest(data);
      });

    console.log(test);
    // const id = 10;
    console.log(deleteTask);
    fetch(`http://localhost:3010/tasks/${deleteTask}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setTest(data);
        // setTest([...remove]);
        console.log(test);
      });

    // let arr = [];
    // console.log(deleteTask);
    // fetch(`http://localhost:3010/tasks/?task=${deleteTask}`, {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // setShowTask(data);
    //     // console.log(setShowTask(data));
    //     // data.filter((item) => {
    //     //   if (deleteTask === item.task) {
    //     //     console.log(item);
    //     //   }
    //     // });
    //     setTest(data);
    //     console.log(test);
    //   });
  }

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
                    {task.task}{" "}
                    <strong
                      onClick={DeleteById}
                      onChange={(e) => setDeleteTask(e.target.value)}
                    >
                      id: {task.id}
                    </strong>
                  </li>
                </>
              ))}
            </div>
          )}
          <br></br>
          <input
            type="text"
            placeholder="Write the task to delete"
            value={deleteTask}
            onChange={(e) => setDeleteTask(e.target.value)}
          ></input>
          <button onClick={DeleteById}>Delete</button>
          <br></br>
          <br></br>
          <button onClick={ShowContexts}>Show context</button>
          {showContexts && (
            <div>
              {contexts.map((context) => (
                <li key={context.id}>{context.title}</li>
              ))}
            </div>
          )}
          <AddNewTask></AddNewTask>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Home;
