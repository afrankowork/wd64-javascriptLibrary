import React  from 'react';

import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/Login';
import Navigation from './components/Navbar'


function App() {
  return (
    
    <div className="App">
      <Navigation />
     
     <br/>
     <div id="wrapper">
       <LoginComponent  />
     </div>
    </div>
    
  );
}





export default App;
