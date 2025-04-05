import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Portfolio from './components/Portfolio';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <Portfolio />
      )}
    </div>
  );
}

export default App;
