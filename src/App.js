import React, { Component } from 'react';
import './App.css';
import  Header  from './components/Header';
import  Home  from './components/Home';
import  Footer  from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home name={"zhangsan"} age={21} />
        <Home name={"zhangsan"} age={21} >
           <p>我来自父类</p>
        </Home>
        <Footer />       
      </div>
    );
  }
}

export default App;
