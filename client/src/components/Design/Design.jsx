import Navbar from "../Navbar/Navbar"
import React, { useRef, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Design.css"
import intro from "../images/intro-office.jpg"
import box1 from "../images/box1.JPG";
import box2 from "../images/box2.JPG";
import box3 from "../images/box3.JPG";
import service1 from "../images/services-1.jpg";
import service2 from "../images/services-2.jpg";
import service3 from "../images/services-3.jpg";
import bg from "../images/details-1-background.jpg";
import bg2 from "../images/details-2-background.jpg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import user from "../images/team-1.png"
import user1 from "../images/team-2.png"
import user2 from "../images/team-3.png"
import user3 from "../images/team-4.png"
import project1 from "../images/project-1.jpg";
import project2 from "../images/project-2.jpg";
import project3 from "../images/project-3.jpg";
import project4 from "../images/project-4.jpg";
import project5 from "../images/project-5.jpg";
import project6 from "../images/project-6.jpg";
import project7 from "../images/project-7.jpg";
import project8 from "../images/project-8.jpg";
import about from "../images/about.jpg"
import facebook from "../images/fb.JPG";
import twitter from "../images/twit.JPG";
import instagram from "../images/insta.JPG";
import linkdin from "../images/linkd.JPG"
import be from "../images/be.JPG";
import pin from "../images/pin.JPG"

function Design () {
  
        return (
            <div>
                <Navbar />
                <section className="intro">
                <div className="intro-parent">
                    <div className="intro-infos">
                        <span>INTRO</span>
                    <h1>We Offer Some Of The<br /> Best Business Growth<br /> Services In Town</h1>
                    <p>Launching a new company or developing the<br /> market position of an existing one can be quite<br /> an overwhelming processs at times.</p><br />
                    <p>"Our mission here at Aira is to get you through <br />those tough moments relying on our team's <br />expertise in starting and growing companies."</p>
                    <h4>Louise Donovan - CEO</h4>
                    </div>
                    <div className="intro-image">
                    <img src={intro} alt="intro-image"/>
                    </div>
                </div>
                </section>
                <section className='services1'>
                    <div className="services-parent">
                        <div className="service-box">
                        <img src={box1} alt="box1"/>
                        <h2>Environment Analysis</h2>
                        <p>The starting point of any success story is<br /> knowing your current position in the<br /> business environment</p>
                        </div>
                        <div className="service-box">
                        <img src={box2} alt="box2"/>
                        <h2>Development Planning</h2>
                        <p>After completing the environmental analysis<br /> the next stage is to design and plan your <br />development strategy</p>
                        </div>
                        <div className="service-box">
                        <img src={box3} alt="box3"/>
                        <h2>Execution & Evaluation</h2>
                        <p>In this phase you will focus on executing the<br /> actions plan and evaluating the results after<br /> each marketing campaign</p>
                    </div>
                    </div>
                </section>

                <section className='services'>
                    <pre>services</pre>
                    <h1>Choose The Service Package <br />That Suits Your Needs</h1>
                    <div className="services_parent">
                        <div className="services_box">
                            <img src={service1} alt="box"/>
                            <h3>Off The Ground Off<br /> The Ground</h3>
                            <p>Perfect for fresh ideas or young<br /> startups, this package will help<br /> get the business off the ground</p>
                            <p><i class="fa fa-square"></i>&nbsp;Environment and competition</p>
                           <p> <i class="fa fa-square"></i>&nbsp;Designing the marketing plan</p>
                           <h2>Starting at <span  className='dolar'>$299</span></h2>
                           <button>details</button>
                        </div>

                        <div className="services_box">
                            <img src={service2} alt="box"/>
                            <h3>Accelerated Growth</h3>
                            <p>Use this service pack to give your<br /> company the necessary impulse <br />to become an industry leader</p>
                            <p><i class="fa fa-square"></i>&nbsp;Business strategy planning</p>
                           <p> <i class="fa fa-square"></i>&nbsp;Taking the planned actions</p>
                           <h2>Starting at <span  className='dolar'>$299</span></h2>
                           <button>details</button>
                        </div>

                        <div className="services_box">
                            <img src={service3} alt="box"/>
                            <h3>Market Domination</h3>
                            <p>You already are a reference point<br /> in your industry now you need to<br /> learn about acquisitions</p>
                            <p><i class="fa fa-square"></i>&nbsp;Maintaining the leader status</p>
                           <p> <i class="fa fa-square"></i>&nbsp;Acquisitions the right way</p>
                           <h2>Starting at <span className='dolar'>$299</span></h2>
                           <button>details</button>
                        </div>
                    </div>
                </section>

                <section className="cadre">
                <div className="cadre-parent">
                    <div className="cadre-image">
                        <img src={bg} alt="bg"/>
                    </div>
                    <div className="cadre-infos">
                <h1 className="title">Accelerate Business Growth To<br /> Improve Revenue Numbers</h1>
        <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h1 className="typo"> <span>1</span> How Can Aria Help Your Business</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
     <p>     At Aria solutions, we’ve taken the consultancy <br />
          concept one step further by offering a full service<br/>
           management organization with expertise.</p>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1 className="typo"><span>2</span> Great Strategic Business Planning</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Aria partners with businesses to business growth <br />and development ideas including environment<br /> analysis, plan execution and evaluation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h1 className="typo"><span>3</span> Online Marketing Campaigns</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>  An awesome online marketing plan won't save your <br />
                bad product but paired with a good product, the sky<br /> 
            is the limit for what can be achieved.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    
                </div>
                
                </div>

                <div className="cadre-parent">
                   
                    <div className="cadre_infos">
                    <div className='center'>
                    <ul>
                    <li><i class="fa fa-th"></i> buisiness</li>    
                        <li><i class="fa fa-th" ></i> Expertisse</li>    
                        <li><i class="fa fa-th"></i> Quality</li>    
                    </ul>    
                    <h3>Business Services For Companies</h3>
                    <p>Aria provides the most innovative and customized busines services in the industry. Our Services section shows how flexible we are for all types of budgets.</p>
                    <pre>Business Development 100%</pre>
                    <div className='progress'></div><br />
                    <pre>Opportunity Spotting 76%</pre>
                    <div className='progress1'></div><br />
                    <pre>Online Marketing 90%</pre>
                    <div className='progress2'></div>
                    </div>
                </div>
                <div className="cadre-image">
                        <img src={bg2} alt="bg"/>
                    </div>
                
                </div>
                </section>



                <section className="swiper1"> 
                <h1>Read Our Customer Testimonials</h1>
                <p>Our clients are our partners and we can not imagine a better future for our <br />
                company without helping them reach their objectives</p>

                <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
      
        <SwiperSlide>
          <div className="swiper-box swiper-1">
          <img src={user} alt='user'/>
          <p>My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</p>
          <h3>Ann Black - Consultant</h3>
          </div>
          <div className="swiper-box">
          <img src={user1} alt='user'/>
          <p>I purchased the Growth Accelerator service pack a few years ago and I renewed the contract each year. </p>
          <h3>Marsha Singer - Marketer</h3>
          </div>
          <div className="swiper-box swiper-2">
          <img src={user2} alt='user'/>
          <p>Aria's CEO personally attends client meetings and gives his feedback on business growth strategies.</p>
          <h3>Roy Smith - Developer</h3>
          </div>
          
          </SwiperSlide>

          <SwiperSlide>
          <div className="swiper-box swiper-1">
          <img src={user} alt='user'/>
          <p>My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</p>
          <h3>Ann Black - Consultant</h3>
          </div>
          <div className="swiper-box">
          <img src={user} alt='user'/>
          <p>My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</p>
          <h3>Ann Black - Consultant</h3>
          </div>
          <div className="swiper-box swiper-2">
          <img src={user} alt='user'/>
          <p>My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</p>
          <h3>Ann Black - Consultant</h3>
          </div>
          
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-box swiper-1">
          <img src={user} alt='user'/>
          <p>My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</p>
          <h3>Ann Black - Consultant</h3>
          </div>
          <div className="swiper-box">
          <img src={user} alt='user'/>
          <p>My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</p>
          <h3>Ann Black - Consultant</h3>
          </div>
          <div className="swiper-box swiper-2">
          <img src={user} alt='user'/>
          <p>My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</p>
          <h3>Ann Black - Consultant</h3>
          </div>
          
          </SwiperSlide>

        
   
      </Swiper>
      
                </section>

                <section className="call">
                  <div className="call-parent">
                  <div className="call-infos">
                    <pre>CALL ME</pre>
                    <h1>Have Us Contact You By Filling<br /> And Submitting The Form</h1>
                    <p className="ptag">You are just a few steps away from a personalized offer. Just fill in the form and send it to us and we'll get right back with a <br />call to help you decide what service package works.</p>
                    <p><i class="fa fa-square"></i> &nbsp;&nbsp;&nbsp;It's very easy just fill in the form so we can call</p><br />
                    <p> <i class="fa fa-square"></i> &nbsp;&nbsp;&nbsp;During the call we'll require some info about the company</p><br />
                    <p> <i class="fa fa-square"></i> &nbsp;&nbsp;&nbsp;Don't hesitate to email us for any questions or inquiries</p>
                 
                  </div>
                  <div className="call-form">
                    <form>
                      <input type="text" placeholder="Name"/><br />
                      <input type="text" placeholder="Phone"/><br />
                      <input type="text" placeholder="Email"/><br />
                      <select name="" id="">
                        <option  value disabled selected >interssted in</option>
                        <option value="">off the gound</option>
                        <option value="">accelerated growth</option>
                        <option value="">market domination</option>
                      </select>
                      <pre>Sélectionnez un élément dans la liste.</pre>
                      <input type="checkbox"  required="" />  <span>I agree with Aria's stated Privacy Policy and Terms & Conditions</span><br />
                      <button>call me</button>
                    </form>
                  </div>
                  </div>
                </section>

                <section className="projects">
                <pre>projects</pre>
                <h2>Projects That We're Proud Of</h2>
                <div className="btns">
                  <button className="all">show all</button>
                  <button>Design</button>
                  <button>Developement</button>
                  <button>Marketing</button>
                  <button>Seo</button>
                </div>
                <div className="projects-parent">
                  <div className="projects-box">
                    <img src={project1} alt="projects"/>
                  </div>
                  <div className="projects-box">
                    <img src={project2} alt="projects"/>
                  </div>
                  <div className="projects-box">
                    <img src={project3} alt="projects"/>
                  </div>
                  <div className="projects-box">
                    <img src={project4} alt="projects"/>
                  </div>
                  <div className="projects-box">
                    <img src={project5} alt="projects"/>
                  </div>
                  <div className="projects-box">
                    <img src={project6} alt="projects"/>
                  </div>
                  <div className="projects-box">
                    <img src={project7} alt="projects"/>
                  </div>
                  <div className="projects-box">
                    <img src={project8} alt="projects"/>
                  </div>
                </div>
                </section>

                <section className="team">
                  <h2>Our Team Of Consultants</h2>
                  <p>We're only as strong and as knowledgeable as our team. So here are the men and <br />
                  women which help customers meet goals and grow companies</p>
                  <div className="team-parent">
                    <div className="team-box">
                      <img src={user} alt="team"/>
                      <p>John Whitelong</p>
                      <h4>John Whitelong</h4>
                    </div>
                    <div className="team-box">
                      <img src={user1} alt="team"/>
                      <p>Veronique Smith</p>
                      <h4>Business Developer</h4>
                    </div>
                    <div className="team-box">
                      <img src={user2} alt="team"/>
                      <p>Chris Zimerman</p>
                      <h4>Online Marketer</h4>
                    </div>
                    <div className="team-box">
                      <img src={user3} alt="team"/>
                      <p>Mary Villalonga</p>
                      <h4>Community Manager</h4>
                    </div>
                  </div>
                </section>

                <section className="about">
                <div className="intro-parent">
                   
                    <div className="intro-image">
                    <img src={about} alt="about-image"/>
                    </div>
                    <div className="intro-infos">
                        <span>ABOUT</span>
                    <h1>We're Passionate About Delivering Growth Services</h1>
 
                    <p>Our goal is to provide the right business growth services at the appropriate time so companies can benefit from the created momentum and thrive for a long period of time</p>
                    <p> <i class="fa fa-square"></i>&nbsp;&nbsp; &nbsp;Everything we recommend has direct positive impact</p>
                    <p> <i class="fa fa-square"></i>&nbsp;&nbsp; &nbsp;You will become an important partner of our company</p>
                    </div>
                </div>
                </section>

                <section className="contact">
                <div className="contact-parent">
                  <div className="contact-infos">
                    <pre>Contact</pre>
                    <h1>Get In Touch Using The Form</h1>
                    <p className="ptag">You can stop by our office for a cup of coffee and just use the contact<br /> form below for any questions and inquiries</p>
                    <p> <i class="fa fa-map-marker" ></i> &nbsp;&nbsp;&nbsp;22nd Innovative Street, San Francisco, CA 94043, US</p><br />
                    <p> <i class="fa fa-phone" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;D+81 720 22 126</p><br />
                    <p> <i class="fa fa-phone" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;+81 720 22 128</p><br />
                    <p> <i class="fa fa-envelope" aria-hidden="true"></i>  &nbsp;&nbsp;&nbsp;office@aria.com</p><br />
                    <h1>Follow Aria On Social Media</h1>
                    <div className="social">
                      <img src={facebook} alt="social"/>
                      <img src={instagram} alt="social"/>
                      <img src={twitter} alt="social"/>
                      <img src={linkdin} alt="social"/>
                      <img src={pin} alt="social"/>
                      <img src={be} alt="social"/>
                    </div>
                  </div>
                  <div className="contact-form">
                    <form>
                      <input type="text" placeholder="Name"/><br />
                      <input type="email" placeholder="Email"/><br />
                      <textarea name="" id="" placeholder="Your Message"></textarea><br />
                      <input type="checkbox"  required="" />  <span>I agree with Aria's stated Privacy Policy and Terms & Conditions</span><br />
                      <button>submit message</button>
                    </form>
                  </div>
                  </div>
                </section>
                
                <footer className="footer">
                  <div className="footer1">
                  <ul className="first">
                    <li  className="head">Few Words About Aria</li>
                    <li>We're passionate about delivering the best business growth services <br />
                      for companies just starting out as startups or industry players that<br /> 
                      have established their market position a long tima ago.</li>
                  </ul>
                  <ul>
                    <li  className="head">Links</li>
                    <li className="link">startupguide.com</li>
                    <li className="link">Terms & Conditions</li>
                    <li className="link">Privacy Policy</li>
                  </ul>

                  <ul>
                    <li  className="head">Tools</li>
                    <li className="link">businessgrowth.com</li>
                    <li className="link">influencers.com</li>
                    <li className="link">optimizer.net</li>
                  </ul>

                  <ul>
                    <li   className="head">Partners</li>
                    <li className="link">unicorns.com</li>
                    <li className="link">staffmanager.com</li>
                    <li className="link">association.gov</li>
                  </ul>
                  </div>
                  <p>Copyright © 2020 Template by Inovatik</p>
                </footer>
            </div>
        );

}

export default Design;