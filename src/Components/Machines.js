import React from "react";
import MachineCard from "./MachineCard";
import ourmachine from "./ourmachine.png";

const Machines = () => {
    // write state as only working , not working , under repair
    //  bg color can be set by own but speeling should be correct
    // create diffrent array elemnts to create diffrent card with diffrent specifications
  const array = [
    {
      cardimage:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      bgcolor: "blue",
      cardtitle: "sexy",
      carddesp:
        "This is a sexy card description of the sexy man Dheeraj shakya",
      state: "not working",
    },
    {
      cardimage:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      bgcolor: "green",
      cardtitle: "sexy",
      carddesp:
        "This is a sexy card description of the sexy man Aditya Sunda",
      state: "working",
    },
    {
      cardimage:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      bgcolor: "yellow",
      cardtitle: "sexy",
      carddesp:
        "This is a sexy card description of the sexy man Dheeraj shakya",
      state: "under repair",
    },
    {
      cardimage:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      bgcolor: "pink",
      cardtitle: "sexy",
      carddesp:
        "This is a sexy card description of the sexy man Dheeraj shakya",
      state: "not working",
    },
    {
      cardimage:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
      bgcolor: "red",
      cardtitle: "sexy",
      carddesp:
        "This is a sexy card description of the sexy man Dheeraj shakya",
      state: "working",
    },
  ];

  return (
    <div style={{backgroundColor:"#5c6cfb"}}>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <img src={ourmachine} alt="" style={{ width: "330px" }} />
      </div>
      <div className="container">
        <div className="row">
          {array.map((e, index) => {
            return (
              <MachineCard
                key={index}
                cardimage={e.cardimage}
                bgcolor={e.bgcolor}
                cardtitle={e.cardtitle}
                carddesp={e.carddesp}
                state={e.state}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Machines;
