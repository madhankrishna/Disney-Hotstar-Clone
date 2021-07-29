import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';
import Details from './components/Details';


function App() {
  return (
    <div className="App">

      <Router>
         <Header />
         <Switch>
           <Route exact path="/">
             <Login />
           </Route>

           <Route path="/home">
              <Home />
           </Route>
           <Route path="/detail/:id">
             <Details />
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
