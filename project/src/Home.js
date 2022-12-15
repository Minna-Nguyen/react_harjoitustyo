import { useState } from "react";
import { useRef } from "react";
function Home(props) {
  const [tasks, setShowTask] = useState([]);
  const [contexts, setShowContext] = useState([]);
  const [showTasks, setShowTasks] = useState(false);
  const [showContexts, setShowContexts] = useState(false);
  const [addTask, setAddTask] = useState("");
  const [addContext, setContext] = useState("");
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
  //adding new task and context to task
  // const addNewTask = useRef(null);
  // const addNewContext = useRef(null);
  function AddTask(e) {
    // const userAddTask = addNewTask.current.value;
    // const userAddNewContext = addNewContext.current.value;
    e.preventDefault();
    console.log(typeof addContext);
    console.log(addContext.length);
    // if (addTask.length !== 0 && addContext.length !== 0) {
    //   // console.log("not valid");
    fetch("http://localhost:3010/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // task: `${userAddTask}`,
        task: `${addTask}`,
        context: `${addContext}`,
      }),
    }) //then() etc is to fetch the data from the db.json so that we can see if it was successful on the console
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
    // } else {
    //   console.log("not working");
    // }
  }

  return (
    <>
      <div className="container">
        <div className="box">
          <h3>Welcome, get started with your to do list!</h3>
          <p> display all the tasks HERE</p>
          <p>buttons that will lead to the other pages</p>
          <button onClick={ShowTasks}>Display all tasks</button>
          {showTasks && (
            <div>
              {tasks.map((task) => (
                <li key={task.id}> {task.task}</li>
              ))}
            </div>
          )}
          <br></br>
          <button onClick={ShowContexts}>Show context</button>
          {showContexts && (
            <div>
              {contexts.map((context) => (
                <li key={context.id}>{context.title}</li>
              ))}
            </div>
          )}
          {/* <input
            ref={addNewTask}
            type="text"

            // value="Add new task"
            // onChange={addNewTask}
          ></input> */}
          {/* <input
            // ref={addNewContext}
            type="text"
            placeholder="Add task"
            // required
            // pattern="[A-Za-z]{2,20}"
            // onChange={(e) => setAddTask
            (e.target.value)}
          ></input> */}
          {/* {addTask} */}
          <form onSubmit={AddTask}>
            <input
              type="text"
              required
              placeholder="Add new task"
              value={addTask}
              onChange={(e) => setAddTask(e.target.value)}
            ></input>{" "}
            <input
              // ref={addNewContext}
              type="text"
              required
              placeholder="Add context"
              // value={addContext}
              onChange={(e) => setContext(e.target.value)}
            ></input>
            <input type="submit" value={"Add"}></input>
          </form>
          {/* <button onClick={AddTask}>Add new task</button> */}
          <p>{addTask}</p>
          <p>{addContext}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
