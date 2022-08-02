import React from 'react'
import working from "./working.png"
import repair from "./repair.png"
import notwork from "./notwork.png"

const MachineCard = ({cardimage,bgcolor,cardtitle,carddesp,state}) => {
    console.log(cardimage);
//   const  cardimg = "../Image/1st.png"
  return (
    <>
     <div className="col-sm-4 " style={{padding:"20px"}}>
    <div className='container'>
    <div className="card" style={{width: "25rem",borderRadius:"30px",boxShadow:"7px 7px 10px"}}>
  <img src={`${cardimage}`} className="card-img-top" alt="..." style={{padding:"30px"}}/>
  <div className="card-body" style={{backgroundColor:`${bgcolor}` , borderRadius:"0 0 30px 30px"}}>
    <h5 className="card-title" style={{color:"darkblue"}}>{cardtitle}</h5>
    <p className="card-text" style={{color:"white"}}>{carddesp}</p>
    <div style={{position: "relative" ,display: "flex",justifyContent: "end"}}>
        <img src={state === "working"? working : state === "under repair"?repair:state === "not working"?notwork:''} alt='' style={{width:"135px"}}/>
    </div>
  </div>
  </div>
</div>
</div>
    </>
  )
}

export default MachineCard