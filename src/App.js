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
  useEffect(() => {
    // Import the WOW.js library
    const WOW = require('wowjs');

    // Create an instance of the WOW.js library with live set to false
    // The live option determines whether elements are updated on resize or scroll events
    const wowInstance = new WOW.WOW({
        live: false
    });

    // Initialize the WOW.js library to animate elements
    wowInstance.init();

    // Cleanup function to remove any event listeners or timers when the component unmounts
    return () => {
        // Typically, the WOW.js library doesn't require cleanup, but it's good practice to clean up after yourself
        // In this case, there are no event listeners or timers to clean up, so it's empty.
    };
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
