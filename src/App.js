import React from'react';
import {Route,Switch} from "react-router-dom"
import './App.css';
import Welcome from './components/welcome/Welcome'
import Clock from './components/clock/Clock';
import Navigation from "./components/navigation/Navigation"
import Contact from "./components/contact/Contact"
import Error from "./components/error/Error"
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route 
        exact
         path="/" render={(props)=><Welcome {...props}name="Deaglan"/>}/>
        <Route exact path="/clock" component={Clock}/>
        <Route exact path="/contact" component={Contact}/>
        <Route  path="/Welcome/:name" component={Welcome}/>
        <Route  component={Error}/>
      </Switch>
    </div>
  );
}

    
export default App