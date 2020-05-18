import React, { Component } from 'react'
import Practice from './components/Practice';
import Practice2 from './components/Practice2';
import AddPractice from './components/AddPractice';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './router/Navbar';
import Home from './router/Home';
import About from './router/About';
import Content from './router/Content';
import Post from './components/Post';

class App extends Component {
  state = {
    ninjas : [
      {name: "Ryu", age: 30, belt: "black", id:1},
      {name: "Yoshi", age: 25, belt: "green", id:2},
      {name: "Crystal", age: 22, belt: "pink", id:3}
    ]
  };
  addFunc = (someone) => {
    someone.id = Math.random();
    let ninjas = [...this.state.ninjas, someone];
    this.setState({
      ninjas : ninjas
      // ninjas : [...this.state.ninjas, someone]
    })
  }
  deleteFunc = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas : ninjas
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route exact path="/content" component={Content}/>
          <Route path="/content/:post_id" component={Post}/> */}
          <Practice/>
          <Practice2 ninjas={this.state.ninjas} deleteFunc={this.deleteFunc}/>
          <AddPractice addFunc={this.addFunc}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
