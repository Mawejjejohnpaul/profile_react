// src/components/Portfolio.js
import React , { useState }from 'react';
import {PrivateDetails,Hobby,ResultsTable,ContactInfo} from './Components';



const Portfolio = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`portfolio ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>MAWEJJE JOHNPAUL</h1>
      <p>Welcome to my personal portfolio webpage. I am a CS student doing web development.</p>
      <hr />
      
      <PrivateDetails />
      <hr />
      
      <h2>Profile Picture</h2>
      <img src="profile.jpeg" alt="Profile" width="250" />
      <hr />
      
      <Hobby />
      
      <ResultsTable />
      
      <ContactInfo />
      
      <hr />
      
      <h2>Links and Navigation</h2>
      <p><a href="https://www.chelseafc.com" target="_blank" rel="noopener noreferrer">My Favorite Website</a></p>
      <p><a href="https://ucu.ac.ug" target="_blank" rel="noopener noreferrer">UCU</a></p>
      
      <hr />
      
      <h2>Career Goals</h2>
      <p>My goal is to become a skilled embedded systems engineer.</p>
      <button onClick={toggleMode}>Change Mode</button>
    </div>
  );
};

export default Portfolio;
