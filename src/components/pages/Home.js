import React from 'react';
import flag from '../../assets/flag-1x.png';
function Home({ currentPage, handlePageChange }) {
  return (
    <div className="aboutPage py-5 px-3">
      <div className="container  glass-2 flex-column my-4 force-v-center py-6 max-width-960">
        <div className="row justify-content-center col-6">
          <h1 className="glass-text mb-4 px-2 text-align-center select-none">
            The People of the State of New Jersey<br></br>deserve a great state flag to represent them
          </h1>
        </div>
        <hr></hr>
        <div className="row justify-content-center col-6">
          <h2 className="glass-text mt-2 px-2 text-align-center select-none">This is the "New" Jersey flag</h2>
        </div>
        <div className="row justify-content-center col-6">
          <img src={flag} alt="new new jersey flag" className="flag-home"></img>
        </div>
        <div className="row justify-content-center col-6">
          <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            <h3 className="mt-3 px-2 text-align-center">Learn More</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
