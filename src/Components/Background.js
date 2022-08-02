import React from 'react'
import img from '../assets/Image/back.jpeg'
import imgx from "../assets/Image/Asset 11.png"

const Background = () => {
  return (
    <>
    <div style={{height:"124vh"}}>
    <img src= {img}  alt="" width='100%'/>
    <div style={{position: "relative" ,top: "-51vw"}}>
        <img src={imgx} alt="" width="44%"/>
    </div>
    <div style={{position: "relative" ,top: "-50vw", left : "4.5vw" , color: "white"}}>
        <h1 style={{ fontSize : '4.5vw' }}>
        Think <br/>
        Tinker <br/>
        Transform 
        </h1>
        <h4 style={{ fontSize : '2vw' }}>
            If it can be Imagined. It can be made
        </h4>
    </div>
    </div>
    </>
  )
}

export default Background