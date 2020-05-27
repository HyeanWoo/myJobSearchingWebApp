import React, { Component } from 'react'

class AddPractice extends Component {
  state = {
    name : null,
    age : null,
    belt : null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFunc(this.state);
  }

  render() {
    return(
      <div className="ninjaForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}/>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" onChange={this.handleChange}/>
          <label htmlFor="belt">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange}/>
        </form>
          <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}

export default AddPractice;