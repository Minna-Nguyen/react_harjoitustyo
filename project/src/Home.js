// import ChangeTextTimely from "./ChangeTextTimely";
import { useState, useEffect } from "react";
function Home(props) {
  const [tasks, setShowTask] = useState([]);

  // function DisplayAll() {
  //   const allContext = [
  //     "http://localhost:3010/task",
  //     "http://localhost:3010/homework",
  //     "http://localhost:3010/other_tasks",
  //   ];
  //   let tmp = [];
  //   Promise.all(
  //     allContext.map((url) =>
  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           data.map((x) => tmp.push(x));
  //           setShowTask(tmp);
  //           console.log(tmp);
  //         })
  //     )
  //   );
  // }
  function DisplayAll() {
    fetch("http://localhost:3010/tasks")
      .then((response) => response.json())
      .then((data) => {
        setShowTask(data);
      });
  }

  // function displayHouseChores() {
  //   fetch("http://localhost:3010/house_chores")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setShowTask(data);
  //     });
  // }

  // function displayHomework() {
  //   fetch("http://localhost:3010/homework")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setShowTask(data);
  //     });
  // }

  // function displayOtherTasks() {
  //   fetch("http://localhost:3010/other_tasks")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setShowTask(data);
  //     });
  // }

  // function addTask(){
  //   fetch("http://localhost:3010/house_chores"), {
  //     method: "POST"
  //   }
  // }
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
          <button onClick={() => DisplayAll()}>Display all tasks</button>
          {/* <button
            onClick={() => {
              DisplayAll();
            }}
          >
            show all{" "}
          </button>
          <button
            onClick={() => {
              displayHouseChores();
            }}
          >
            Display house chores
          </button>
          <button
            onClick={() => {
              displayHomework();
            }}
          >
            Display homeworks
          </button>
          <button
            onClick={() => {
              displayOtherTasks();
            }}
          >
            Display others tasks
          </button> */}
          <div>
            {tasks.map((t, i) => (
              <li key={i}> {t.task}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
