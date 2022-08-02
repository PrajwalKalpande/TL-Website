import { useState,useEffect } from "react"
import React from 'react'
import './Centrado.css'
import Card from "./Card"
import left from './Asset17.png'
import right from './Asset15.png'

const Centrado = () => {
    const [loaded, setloaded] = useState(false)
   let  currdeg  = 0;
   
 useEffect(() => {
  if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    setloaded(true)
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        setloaded(true);
    });
}
 }, [])
    


function rotate(e){
  if(e==="n"){
    currdeg = currdeg - 60;
  }
  if(e==="p"){
    currdeg = currdeg + 60;
  }
  if (loaded) {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll('.item')
 
  carousel.setAttribute('style'," -webkit-transform: rotateY("+ currdeg +"deg); -moz-transform: rotateY("+ currdeg +"deg); transform: rotateY("+ currdeg +"deg);")
  
//   items.setAttribute('style'," -webkit-transform: rotateY("+ -currdeg +"deg); -moz-transform: rotateY("+ -currdeg +"deg); transform: rotateY("+ -currdeg +"deg);")
   console.log(items);
   items.forEach(e=>e.setAttribute('style'," -webkit-transform: rotateY("+ -currdeg +"deg); -moz-transform: rotateY("+ -currdeg +"deg); transform: rotateY("+ -currdeg +"deg);"))
}
}

  return (
    <>
    <div className="container1" style={{padding:'70px 0',position:'relative'}}>
  <div className="carousel">
    <div className="a">
      <div className="item"><Card/></div>
    </div>
    <div className="b">
      <div className="item"><Card/></div>
    </div>
    <div className="c">
      <div className="item"><Card/></div>
    </div>
    <div className="d">
      <div className="item"><Card/></div>
    </div>
    <div className="e">
      <div className="item"><Card/></div>
    </div>
    <div className="f">
      <div className="item"><Card/></div>
    </div>
    <div className="g">
    <div className="item">JUS</div>
    </div>
    <div className="h">
      <div className="item">ERNEST</div>
    </div>
    <div className="i">
      <div className="item">HOLA</div>
    </div>
    <div className="j">
      <div className="item">QUE</div>
    </div>
    <div className="k">
      <div className="item">TAL</div>
    </div>
  </div>
</div>
<div className="next" onClick={()=>rotate('n')}><img src={right} alt='' style={{width:'3vw'}}/></div>
<div className="prev" onClick={()=>rotate('p')}><img src={left} alt='' style={{width:'3vw'}}/></div>

    </>
  )
}

export default Centrado