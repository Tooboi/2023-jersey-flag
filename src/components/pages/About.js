import React from 'react';
export default function About() {
  return (
    <div className="aboutPage py-5 px-3" >
      <div className="container card flex-column p-3 py-4 mt-4 max-width-960">
        <div className="row justify-content-center col-6">
         <h2 className='glass-text mb-4 px-2 text-align-center select-none'>Throughout New Jersey's history<br></br>people have been welcomed from many different places and countries of the world<br></br>They deserve a great banner to unite them proudly</h2>  
        </div>
        <div className="row flex-column justify-content-center col-6">
         <h1 className='glass-text mb-0 px-2 text-align-center select-none h1-blue'>BLUE</h1>
         <h2 className='glass-text px-2 text-align-center select-none'>Represents the Atlantic coastline of NJ, as well as our many beautiful lakes and rivers</h2>  
        </div>
        <div className="row flex-column justify-content-center col-6">
         <h1 className='glass-text mb-0 px-2 text-align-center select-none h1-green'>GREEN</h1>
         <h2 className='glass-text px-2 text-align-center select-none'>Represents that NJ is the "Garden State", with acres of lush farmland and many beautiful parks and woodlands</h2>  
        </div>
        <div className="row flex-column justify-content-center col-6">
         <h1 className='glass-text mb-0 px-2 text-align-center select-none h1-three'>THREE STARS</h1>
         <h2 className='glass-text px-2 text-align-center select-none'>Represents NJ being the 3rd state to enter the union of the United States</h2>  
        </div>
        <div className="row flex-column justify-content-center col-6">
         <h1 className='glass-text mb-0 px-2 text-align-center select-none h1-dia'>DIAGONAL BANNER</h1>
         <h2 className='glass-text px-2 text-align-center select-none'>Represents NJ's important role in history as the "Crossroads of the Revolution", as well as a modern crossroads between NYC and Philadelphia</h2>  
        </div>
      </div>
    </div>
  );
}