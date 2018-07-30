import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import NavBar from './components/Nav/Nav';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import HomeB from './components/HomeB';
import HomeC from './components/HomeC';
import routeParam from './components/routeParam';
import Error404 from './components/error/Error404';
import Records from './components/records/Records'

class App extends Component {
  render() {
    return (
      <Router basename="demo" >
        <div className="App">
          <Header />
          <NavBar />
          {/* <Home name={"zhangsan"} age={21} />
          <Home name={"zhangsan"} age={21} >
            <p>我来自父类</p>
          </Home> */}
          <Switch>
            <Route exact path="/" component={Home} />            
            <Route path="/HomeB" component={HomeB} />
            <Route path="/HomeC" component={HomeC} />
            <Route path="/records" component={Records} />
            <Route path="/routeParam/:id" component={routeParam} />
            <Redirect from="/redirect" to="/" />
            <Route  component={Error404} />
          </Switch>
          <Footer />
        </div>
      </Router>



    );
  }
}

export default App;
