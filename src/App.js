import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'animate.css';

/*
*/
function App() {
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
