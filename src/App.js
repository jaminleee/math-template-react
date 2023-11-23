import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Template from './components/Template';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes path="/" component={Template} />
      </div>
    </Router>
  );
}

export default App;