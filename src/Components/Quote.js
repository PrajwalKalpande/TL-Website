import React, { Component } from 'react';
import thinkinggif from "../assets/thinking.gif"
import { useEffect } from 'react';
import './Quote.css';
export default function Quote() {
  
 //Rotating Gears on rightside

 useEffect(() => {
  //Fixed the bug which was occuring due to DOM being accessed before loading
  // by putting the onscroll event in useEffect()
  
 
});


  
      return (
      <>
 
       <div className='bluebg p-5'  >
          
{/* GIF  */}
           <div style={{flex:1}}><img className='img-fluid'  src={thinkinggif}  alt="Keep Exploring. Keep Thinking." /></div>
{/* QUOTE */}
           <div style={{flex:1}} className='d-flex flex-column'>

               <div style={{flex:1,fontSize:'4vw' ,paddingRight:'12vw'}} 
               className='h1 m-5 font-weight-bold text-capitalize'>
                 <b>Explore The Possibilities <br></br>Around</b>
                </div>
                
               <div style={{flex:1,fontSize:'2vw' ,  paddingRight:'5vw'}}
                className='font-weight-bold mx-5 '>
                "The first rule to tinkering 
                is<br></br>to save all the parts" 
                </div>

                <div className='author' style={{flex:1,fontSize: '2vw',marginBottom:"5vh" , paddingRight:'10vw',textAlign:'right'}} >
                    -<b>Paul Erlich</b>
                </div>
                
           </div>

{/* GEARS  */}
           <div className="container-gears">
              <div className="gear1"></div>
              <div className="gear2"></div>
            </div>
       </div>
       </>
      )
}


 