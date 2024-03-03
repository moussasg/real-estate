import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'animate.css';
import React, { useEffect } from 'react';

/*
*/
function App() {
  useEffect( () => {
    // Import the WOW.js library
    const WOW = require('wowjs');

    // Create an instance of the WOW.js library with live set to false
    // The live option determines whether elements are updated on resize or scroll events
    const wowInstance = new WOW.WOW({
        live: false
    });
// false=> animations seront simplement déclenchées une seule fois au chargement initial
    // Initialize the WOW.js library to animate elements
    wowInstance.init();

    // Cleanup function to remove any event listeners or timers when the component unmounts
}, []);
  return (
    <Router>
        <Header/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Footer />
    </Router>
  );
}

export default App;
