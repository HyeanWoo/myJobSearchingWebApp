import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Content extends Component {
  state = {
    posts : []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts : res.data.slice(0,10)
        });
      });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball"/>
            <div className="card-content">
              <Link to={"/content/"+post.id}>
                <span className="card-title brown-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">Loading Posts...</div>
    );
    return(
      <div className="container content">
        <h4 className="center">Content</h4>
        {postList}
      </div>
    );
  }
}

export default Content;