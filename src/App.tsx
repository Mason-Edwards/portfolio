import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

// Pages
import Home from './components/Home';
import ContactMe from './components/ContactMe';



function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactMe" exact component={ContactMe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
