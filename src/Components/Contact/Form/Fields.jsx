import React from 'react';
import './Fields.css';
function Fields() {
  return (
    <div className='fields'>
        <section id="contact">
  <div className="contact-wrapper">
  <form>
		 
		 
			<div className="form-group field position-relative">
				<label for="formName" className="d-block">
               <span><i className="fa fa-user icon"></i> </span> 
              
				</label>
                  <input type="text" id="formName" className="shadow-none form-control-lg thick" placeholder="Full Name"/>

			</div>

		 
         
			<div className="form-group field position-relative">
				<label htmlFor="formEmail" className="d-block">
				<span><i className="fa fa-envelope icon"></i></span>
 
				</label>
				<input type="email" id="formEmail" className="shadow-none form-control-lg thick" placeholder="E-mail"/>
			</div>

		 
			<div className="form-group message">
				<textarea id="formMessage" className="form-control-lg" rows="5" placeholder="Message"></textarea>
			</div>
		
			 
			<div className="text-center">
                
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
        </div>
      
      </button>
       
			</div>
	</form>
	
 
      {/* <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr/>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div> */}
    
  </div>
  
</section>  
  
  
        </div>
  )
}

export default Fields