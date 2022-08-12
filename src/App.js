import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router> 
    <div className="App">
      <Navbar />
      <Switch>
      {/* <Route path="/" component={home} /> */}
      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
      </Switch>
    </div>
    </Router>
  );
}

// const home = () => (
//   <div>
//     <h1>Home</h1>
//   </div>
// );

export default App;
