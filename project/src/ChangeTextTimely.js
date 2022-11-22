import { useState, useEffect } from "react";
function ChangeTextTimely() {
  const [text, setDefaultText] = useState();
  const [status, setStatus] = useState(false);
  const texts = ["i am changing", "or AM I CHANGING?"];
  // the tab shows "foo"
  document.title = "foo";

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (!status) {
        setDefaultText(texts[0]);
        console.log("cleaning text");
      } else {
        setDefaultText(texts[1]);
      }
      // gives false, so when re-rendered enters the else block
      setStatus(!status);
    }, 2000);

    return () => clearInterval(intervalID);
  });

  return <>{text}</>;
}

export default ChangeTextTimely;
