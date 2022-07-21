import React from 'react';
import { Map } from './Map';
import Fields from './Fields';
import './Form.css';
function Form() {
  
  return (
    <div className="contact-page">
      <div className='contact ' >
 
 <div className='flex-container'> 
 <div className='flex-item-left'><img src={require('./map.jpg')} alt="Map for TL Lab" height="460vh"/></div>


 <div className='flex-item-right'><Fields/></div>

</div>


  </div>
    </div>
  )
}

export default Form;