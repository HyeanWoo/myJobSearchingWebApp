import React from 'react';

class Practice extends React.Component {
  state = {
    name : "Ryu",
    age : 30
  };

  handleChange = (e) => {
    this.setState({
      name : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submiited", this.state.name);
  }

  render () {
    return (
      <div>
        <h3>My Name is { this.state.name }</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button>submit</button>
          <button type="reset">reset</button>
          <button type="button">just button</button>
        </form>
      </div>
    );
  }
}

export default Practice;