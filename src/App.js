import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NavBar from './components/Navbar/index';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path={["/", "/home", "/annie-mcfarland-web-development/"]} component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
