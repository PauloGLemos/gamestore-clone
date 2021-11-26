import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar2/Navbar2';
import Slider from './components/Slider/Slider';
import Card from './components/Card/Card';
import Card2 from './components/Card2/Card2';
import Footer from './components/Footer/Footer'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Navbar/>
      <Navbar2/>
      <div className="card0">
        <Slider/>
      </div>
      <div className="card1">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="card2">
        <Card2/>
        <Card2/>
        <Card2/>
      </div>
      <div className="card1">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


