import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './componen/Header';
import Jumbotron from './componen/Jumbotron';

const App = () => {
  return (

    <div className='App'>
      <Header/>
      <Jumbotron/>
    {/* <Router>
      <Routes>
        <Route path = '/' element={<Header/>} />
        <Route path = '/' element={<Jumbotron/>} />v 
      </Routes>
    </Router> */}
    </div> //////////////////
  )
} 

export default App;
 