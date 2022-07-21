import React from 'react'
import './people.css';
 
function People() {
  return (
    <div className='content-section'> 
    <section id="team" className="team section ">
       
        <div className="row text-center">
          <div className="col-md-12 ">
            <h1>Our Team</h1>
            <h3 className="my-1 gray">Meet our wonderful team that makes TL work</h3>
          </div>
          
          <hr  
        style={{
            color: "red",
            height: 5,
  
        }}
    />
    
          <div className='container-fluid h-100 d-flex flex-column '>
            {/* //Manager and Secretary */}
          <div className="row  my-4">
    
              <div className='col-2'></div>
    
              <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/1.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.</p>
                      <hr  />
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                      <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>
                      </ul>
                    </figcaption>
                  </figure>
                   
                 {/* <div className='name'>Full Name</div>
                 <div className='title'>Manager </div> */}
                 
                </div>
              </div>
    
              <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/2.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
              <div className='col-2'></div>
    
            </div>
             
            <div className="row  ">
            <div className='col-space'></div>
    
            <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/3.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
              <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/4.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
              <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/6.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
    <div className='col-space'></div>
</div>
            <div className="row my-4  ">
            <div className='col-space'></div>
    
            <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/3.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
              <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/4.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
              <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/6.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
    <div className='col-space'></div>
</div>
     
  <div className="row my-4">
    
  <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/6.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
              <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/7.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
    
              <div className="col">
                <div className="team-member">
                  <figure>
                    <img  src= {require("../../../assets/8.jpeg" )} alt="" className="img-responsive"/>
                    <figcaption>
                      <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
                      
                      <h4>Terry Fletcher</h4>
                  <p>Web Developer</p>
                  <ul>
                        <li><a href=""><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li><a href=""><i className="fa fa-instagram fa-2x"></i></a></li>

                      </ul>
                    </figcaption>
                  </figure>
  
                </div>
              </div>
   

    


  </div>
  </div>
  
      
      </div>
    </section></div>
  )
}

export default People