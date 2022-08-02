import React from 'react'
import Asset from './Asset13__01.png';
import Centrado from './Centrado';

const Project = () => {
  return (
    <>
    <div style={{position:'relative'}}>
        <img src={Asset} alt='' style={{width:'100%'}} />
        <div style={{position:'absolute',top:'0'}}>
         <div>
            <div style={{height:'9.5vw'}}></div>
     <div style={{width:'100vw'}}>
        <h1 className='' style={{display:'flex',justifyContent:'center',color:'white'}}>Some of our Projects</h1>
     </div>
     <div>
        <h5 className='' style={{display:'flex',justifyContent:'center',color:'white'}}>Come Build Your Own</h5>
     </div>
     <Centrado/>
     </div>
     </div>
     </div>
    </>
  )
}

export default Project