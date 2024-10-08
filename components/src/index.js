import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class BlogPage extends Component {
  /* In the Component constructor, initialize this.state. For example 
   * the BlogPostExcerpt component might have a clicked state */
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }

  render() {
    return (
      <div>
        <h1>Main Blog Page</h1>
        <p>Status: {this.state.clicked}</p> 
      </div>
    )
  }
}

const BlogPostExcerpt = () => {
  return (
    <div>
      <h3>Title</h3>
      <p>Description</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <BlogPage /> 
    <BlogPostExcerpt />
  </div> 
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
