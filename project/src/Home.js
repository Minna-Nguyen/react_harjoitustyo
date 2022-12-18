import { useEffect, useState } from "react";
import AddNewTask from "./AddNewTask";
import AddNewContext from "./AddNewContext";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { Collapse } from "@mui/material";
function Home(props) {
  const [tasks, setShowTask] = useState([]);
  const [contexts, setShowContext] = useState([]);
  const [showTasks, setShowTasks] = useState(false);
  const [showContexts, setShowContexts] = useState(false);
  // for task editing
  const [editTask, setEditTask] = useState("");
  const [editTaskContext, setEditTaskContext] = useState("");
  const [editDuration, setEditDuration] = useState("");
  // for context editing
  const [editContextTitle, setEditContextTitle] = useState("");
  const [open, setOpen] = useState(false);
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

  function EditTask(id) {
    // e.preventDefault();
    console.log("editis");
    const toEdit = tasks.find((item) => item.id === id);
    if (editTask !== "" && editDuration !== "" && editTaskContext !== "") {
      fetch(`http://localhost:3010/tasks/${JSON.parse(toEdit.id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: `${editTask}`,
          //split() separete the string by this separator and create new array
          duration: Number(editDuration),
          context: editTaskContext.split(", "),
          completed: false,
        }),
      });
      // editTaskSuccess(!editTaskSuccess);
      setOpen(!open);
    }
  }
  function EditContext(id) {
    // id.preventDefault();
    console.log("editis");
    const toEdit = contexts.find((item) => item.id === id);
    if (editContextTitle !== "") {
      fetch(`http://localhost:3010/contexts/${JSON.parse(toEdit.id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${editContextTitle}`,
        }),
      });
      setOpen(!open);
    }
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // editTaskSuccess(false);
    setOpen(false);
  };
  useEffect(() => {
    const getTasks = () => {
      fetch("http://localhost:3010/tasks")
        .then((response) => response.json())
        .then((data) => {
          // to view certain task and its content or whatnot, have to call it array[i].context
          // console.log(data[0].duration);
          // task: id 2 where context are ["homework", "other"]
          // console.log(data[1].context);
          setShowTask(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (showTasks) {
      getTasks();
    }
  });
  useEffect(() => {
    const getContexts = () => {
      fetch("http://localhost:3010/contexts")
        .then((res) => res.json())
        .then((data) => {
          setShowContext(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (showContexts) {
      getContexts();
    }
  });
  return (
    <>
      <div className="container">
        <div className="box">
          <h3>Welcome, get started with your to do list!</h3>
          <button onClick={() => setShowTasks(!showTasks)}>
            Display tasks
          </button>
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
                <div className="edit">
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
                <div className="edit">
                  {tasks.map((task, index) => (
                    <li key={task.id}>
                      <button
                        type="submit"
                        key={index}
                        onClick={() => {
                          EditTask(task.id);
                        }}
                      >
                        <>
                          <form>
                            <label>Task: </label>
                            <input
                              type="text"
                              required
                              placeholder="Edit task"
                              value={editTask}
                              onChange={(e) => setEditTask(e.target.value)}
                            ></input>
                            <br></br>
                            <label>Context: </label>
                            <input
                              type="text"
                              required
                              placeholder="Edit context"
                              value={editTaskContext}
                              onChange={(e) =>
                                setEditTaskContext(e.target.value)
                              }
                            ></input>
                            <br></br>
                            <label>Duration: </label>
                            <input
                              type="text"
                              required
                              placeholder="Edit duration"
                              value={editDuration}
                              onChange={(e) => setEditDuration(e.target.value)}
                            ></input>{" "}
                            <br></br>
                            <br></br>
                            {/* <input type="submit" value={"Edit"}></input> */}
                          </form>
                        </>
                        Edit {task.task}
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            </>
          )}
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Edit success!
            </Alert>
          </Snackbar>
          <br></br>

          <AddNewTask></AddNewTask>
          <br></br>
          <br></br>
          <button onClick={() => setShowContexts(!showContexts)}>
            Display contexts
          </button>
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
                <div className="edit">
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
                <div className="edit">
                  {contexts.map((context, index) => (
                    <li key={context.id}>
                      <button
                        key={index}
                        onClick={() => {
                          EditContext(context.id);
                        }}
                      >
                        <form>
                          <label>Context: </label>
                          <input
                            type="text"
                            required
                            placeholder="Edit context"
                            value={editContextTitle}
                            onChange={(e) =>
                              setEditContextTitle(e.target.value)
                            }
                          ></input>
                          <br></br>
                        </form>
                        Edit {context.title}
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            </>
          )}
          <AddNewContext></AddNewContext>
        </div>
      </div>
    </>
  );
}

export default Home;
