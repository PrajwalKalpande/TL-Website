import React from "react";
import "../Components/button.css";
import { useState, useEffect } from "react";

const Eventcard1 = () => {
  const [arrno, setarrno] = useState(2);

  useEffect(() => {
    return () => {
      console.log("Dom loaded");
      if (arrno === 0) {
        document.getElementById("layers3").style.backgroundColor = "#08acf7";
        document.getElementById("layers2").style.backgroundColor = "darkblue";
        setarrno(1);
      } else if (arrno === 1) {
        document.getElementById("layers3").style.backgroundColor = "orange";
        document.getElementById("layers2").style.backgroundColor = "red";
        document.getElementById("btns").style.backgroundColor = "red";
        document.getElementById("under").style.backgroundColor = "orange";
        setarrno(2);
      } else if (arrno === 2) {
        document.getElementById("layers3").style.backgroundColor = "#05ff64";
        document.getElementById("layers2").style.backgroundColor = "darkgreen";
        document.getElementById("btns").style.backgroundColor = "darkgreen";
        document.getElementById("unders").style.backgroundColor = "#05ff64";
        setarrno(0);
      }
    };
  }, [arrno]);

  return (
    <>
      <div>
        <div className="layers4" id="layers4" style={{ position: "relative" }}>
          <div className="layers3" id="layers3"></div>
          <div className="layers2" id="layers2">
            <h1 className="headings">Machine Training Session</h1>;
            <div className="underlines" id="unders"></div>
            <div className="descpofevents">
              {" "}
              This is some description of the event . <br />
              There will be a Video showing in white box.
            </div>
            <button className="btnss thirds" id="btns">
              {" "}
              Registration coming soon!
            </button>
          </div>
          <div className="layers1" id="layers1"></div>
        </div>
      </div>
    </>
  );
};

export default Eventcard1;
