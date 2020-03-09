import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Content extends Component {
  render() {
    const { posts } = this.props
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
    )
    return(
      <div className="container content">
        <h4 className="center">Content</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps) (Content);