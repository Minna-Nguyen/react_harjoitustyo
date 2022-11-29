// import ChangeTextTimely from "./ChangeTextTimely";
import { useState, useEffect } from "react";
function Home(props) {
  const [tasks, setShowTask] = useState([]);

  function displayTask() {
    const allContext = [
      "http://localhost:3010/house_chores",
      "http://localhost:3010/homework",
      "http://localhost:3010/other_tasks",
    ];

    Promise.all(
      allContext.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setShowTask(data);
          })
      )
    );
    // fetch("http://localhost:3010/house_chores")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setShowTask(data);
    //   });
  }
  // function addTask(){
  //   fetch("http://localhost:3010/house_chores"), {
  //     method: "POST"
  //   }
  // }
  function ClickDisplayAllTask() {
    displayTask();
    console.log("in ClickDisplayAllTask function");
  }
  useEffect(() => {
    console.log("cleaning");
  });

  return (
    <>
      <div className="container">
        <div className="box">
          <h3>Welcome, get started with your to do list!</h3>
          <p> display all the tasks HERE</p>
          <p>buttons that will lead to the other pages</p>
          <button onClick={ClickDisplayAllTask}> Display all tasks</button>
          <div>
            {tasks.map((task) => (
              <li key={task.id}> {task.task}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
