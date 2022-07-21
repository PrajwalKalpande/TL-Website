import React from "react";
import "../Components/button.css";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
// import VideoPlayer from "react-video-js-player";

const Eventcard1 = () => {
  const [arrno, setarrno] = useState(2);

  useEffect(() => {
    return () => {
      console.log("Dom loaded");
      if (arrno === 0) {
        document.getElementById("layer3").style.backgroundColor = "#08acf7";
        document.getElementById("layer2").style.backgroundColor = "darkblue";
        setarrno(1);
      } else if (arrno === 1) {
        document.getElementById("layer3").style.backgroundColor = "orange";
        document.getElementById("layer2").style.backgroundColor = "red";
        document.getElementById("btn").style.backgroundColor = "red";
        document.getElementById("under").style.backgroundColor = "orange";
        setarrno(2);
      } else if (arrno === 2) {
        document.getElementById("layer3").style.backgroundColor = "#05ff64";
        document.getElementById("layer2").style.backgroundColor = "darkgreen";
        document.getElementById("btn").style.backgroundColor = "darkgreen";
        document.getElementById("under").style.backgroundColor = "#05ff64";
        setarrno(0);
      }
    };
  }, [arrno]);
   
  const [state, setstate] = useState({ playing: false})
   let src = "https://www.youtube.com/watch?v=wCu9W9xNwtI&ab_channel=Lesics";
   const handleOnReady = () => setTimeout(() => setstate({ playing: true }), 100);
  return (
    <>
      <div>
        <div className="layer4" id="layer4" style={{ position: "relative" }}>
          <div className="layer3" id="layer3"></div>
          <div className="layer2" id="layer2">
            <h1 className="heading">Machine Training Session</h1>;
            <div className="underline" id="under"></div>
            <div className="descpofevent">
              {" "}
              This is some description of the event . <br />
              There will be a Video showing in white box.
            </div>
            <button className="btns thirds" id="btn">
              {" "}
              Registration coming soon!
            </button>
          </div>
          <div className="layer1" id="layer1">
            <ReactPlayer
              url= {src}
             controls={false}
             loop={true}
             onReady={handleOnReady()} 
             playing={state}
              style={{ position: "relative", left: "4vw", top: "0.75vw" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventcard1;
