import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Prague"/>
      <footer>
        This project was coded by{" "} <a href="https://boring-heyrovsky-f3b4e2.netlify.app/" target="_blank" rel="noreferrer">Michaela Šimková</a> and it is{" "} 
      <a href="https://github.com/Michaela298/react-weather-app" target="_blank" rel="noreferrer">open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}


