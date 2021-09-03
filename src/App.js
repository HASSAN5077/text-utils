import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import TextForn from './componenets/TextForn';
import About from './componenets/About';
import Alert from './componenets/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './componenets/Contact';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const [myStyle, setmyStyle] = useState({
    color: '#000',
    backgroundColor: '#fff'
  })
  const [btntext, setbtntext] = useState("Enabled Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color == '#000') {
      setmyStyle({
        color: '#fff',
        backgroundColor: '#000'
      })
      setbtntext("Enabled light Mode");
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setmyStyle({
        color: '#000',
        backgroundColor: '#fff'
      })
      setbtntext("Enable Dark Mode");
      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar home="Home" contact="Contact" title="FirstComponent" aboutText=" About US" style={myStyle} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About toggleStyle={toggleStyle} btntext={btntext} style={myStyle} />
            </Route>
            <Route path="/contact">
            <Contact/>
            </Route>
            <Route path="/">
              <TextForn heading="Enter text here" />
            </Route>
          </Switch>
        </div>

      </Router>
    </>
  );
}
export default App;
