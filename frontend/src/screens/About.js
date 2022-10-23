import React from 'react';
import { Helmet } from 'react-helmet-async';
import sally from '../Images/Saly-14.png'
import trainStation from '../Images/train_station.png'

function About() {
  return (
    <div>
      
      <section className='About_section1'>
        <h3 className='About_h1'>About Us</h3>
        <hr />
        <div className='About_train'>
          <img src={trainStation} alt='' className='About_trainpic'/>
          <div className='About_text'>
            <p>
              Runtime Trains serves as one of the pioneers for modern day
              transportation. It was founded in the early 2000s, what aimed to
              transport the working class slowly turned to luxury transportation
              and transport for everyone. 
            </p>

            <p>
              This transporting system has been effective for many years, from
              the early years of 1800s, it is very interesting how this from of
              transport has evolved over the years, as technology advances,
              the train system advances as well.
            </p>

            <p>
              We have done all we could to stay up to date with new technology
              and our competitors, we offer luxury as well as offering
              affordibility.
            </p>
          </div>
        </div>
      </section>
      
      <section className='About_section2'>
        <h3 className='About_h2'>What Our Customers Say</h3>
        <hr />
        <div>
          Blah Blah Blah, ndakthanda siyanda , Oh no I wanna blowjob
        </div>
      </section>

      <section className='form_wrapper'>
        <h3 className='About_h3'>Get In Touch With Us</h3>
        <hr />
        <div className='About_form'>
          <img src={sally} alt="" className='sallypic'/>
          <form>
            <div className='Input_wrapper'>
              <label>Full Name</label>
              <input type="text" placeholder='e.g John Doe'/>
            </div>
            
            <div className='Input_wrapper'>
              <label className=''>Email</label>
              <input placeholder='e.g john.doe@example.com'/>
            </div>
            
            <div className='Input_wrapper'>
              <label className='MsgUs'>Message</label>
              <textarea rows="5"/>
            </div>

            <button type="submit" className='submit-btn' onClick={(e)=> {e.preventDefault(); console.log("clicked button")}}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
    
   

    
  );
}

export default About;
