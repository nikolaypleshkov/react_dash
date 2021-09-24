import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from "./pages/Payment/Payment";
import Sales from './pages/Sales/Sales';
import Domains from './pages/Domains/Domains';
import Assessment from './pages/Assessment/Assessment';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleBurger = () => {
    setToggleMenu(!toggleMenu);
  }

  const getState = () => {
    return toggleMenu;
  }

  return (
    <Router>
      <div className="App">
        <Navbar toggleBurger={toggleBurger} getState={getState} getWindowDimensions={getWindowDimensions} />
        <div className="container">
          <Sidebar getState={getState} getWindowDimensions={getWindowDimensions} />
          <Switch>
        <Route exact path="/">
          <Home getState={getState} getWindowDimensions={getWindowDimensions} />
        </Route>
        <Route exact path="/payment">
          <Payment getState={getState} getWindowDimensions={getWindowDimensions} />
        </Route>
        <Route exact path="/sales">
          <Sales getState={getState} />
        </Route>
        <Route exact path="/domains">
          <Domains getState={getState} />
        </Route>
        <Route exact path="/assessments">
          <Assessment getState={getState} />
        </Route>
      </Switch>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
