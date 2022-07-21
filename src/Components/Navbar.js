import React from 'react'
import './button.css'
import imgx from "../assets/Image/Asset 11.png"
// import { useState } from 'react'

const Navbar = () => {
    // const [tllogo, settllogo] = useState(0)

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    let  quote = document.getElementsByClassName('.bluebg');
  let gear1 = document.querySelector(".gear1").style;
  let gear2 = document.querySelector(".gear2").style;
 
  // Function to rotate the png images of gears
 
    gear1.transform = "rotate(" + (window.scrollY * 2.5) + "deg)";
    gear2.transform = "rotate(-" + (window.scrollY * 2.5) + "deg)";
 

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      document.getElementById("navbar").style.background = "white";
      document.getElementById("tap1").style.color = "rgb(42 132 255)";
      document.getElementById("tap2").style.color = "rgb(42 132 255)";
      document.getElementById("tap3").style.color = "rgb(42 132 255)";
      document.getElementById("tap4").style.color = "rgb(42 132 255)";
      document.getElementById('navbar').style.position = "fixed"
      // document.getElementById("tllogonav").innerHTML = `<img src="../Image/Asset 11.png" alt="" width='16%'/>`;
      // settllogo(1)
    } else {
     
      document.getElementById("navbar").style.background = "none";
      document.getElementById("tap1").style.color = '#fff';
      document.getElementById("tap2").style.color = '#fff';
      document.getElementById("tap3").style.color = '#fff';
      document.getElementById("tap4").style.color = '#fff';
      document.getElementById('navbar').style.position = "relative"

    }
  }
  return (
    <>
   <nav className="navbar navbar-expand-lg" style={{position: 'relative' , width: '100vw' , zIndex : '5'}} id = 'navbar'>
  <div className="container-fluid" style={{display: "flex" , flexDirection: 'row-reverse'}}>
      <ul className="navbar-nav" style={{display: 'flex' ,flexDirection: 'row' }}>
        
      <li className="nav-item " style={{padding : "0vw 2vw"}} >
        {/* <div id = "tllogonav"> */}
      <img src={imgx} alt="" width='16%'/>
      </li>
        <li className="nav-item " style={{padding : "0vw 2vw"}}>
          <a className="nav-link tap" href="/" id='tap1' style={{}}>Events</a>
        </li>
        <li className="nav-item " style={{padding : "0vw 2vw"}}>
          <a className="nav-link tap" href="/" id='tap2'>Project</a>
        </li>
        <li className="nav-item " style={{padding : "0vw 2vw"}}>
          <a className="nav-link tap" href="/" id='tap3'>Machine</a>
        </li>
        <li className="nav-item " style={{padding : "0vw 2vw"}}>
          <a className="nav-link tap" href="/" id='tap4'>Contacts</a>
        </li>
        <li className="nav-item" style={{padding : "0vw 2vw" , position: 'relative' , top: '5.5px'}}>
         <button className="btn third"> Login </button>
        </li>

      </ul>

  </div>
</nav>
    </>
  )
}

export default Navbar