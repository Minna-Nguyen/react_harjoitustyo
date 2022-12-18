import React from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { Collapse } from "@mui/material";

function AddNewContext(props) {
  const [addContext, setContext] = useState("");
  const [successClose, setSuccessClose] = useState(false);
  const [errorClose, setErrorClose] = useState(false);
  let handleSubmit = (e) => {
    // context is one tag or more
    // e.preventDefault();
    if (!addContext.includes(",")) {
      fetch("http://localhost:3010/contexts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${addContext}`,
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
        <label>Context: </label>
        <input
          type="text"
          required
          placeholder="Add context"
          value={addContext}
          onChange={(e) => setContext(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <input type="submit" value={"Add context"}></input>
      </form>

      <Collapse in={successClose}>
        <Alert
          severity="success"
          onClick={() => {
            setSuccessClose(!successClose);
          }}
          onClose={() => {}}
        >
          You added context: {addContext} <br></br>
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
          You can add context one by one at a time
        </Alert>
      </Collapse>
    </>
  );
}
export default AddNewContext;
