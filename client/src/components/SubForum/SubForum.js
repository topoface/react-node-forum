import React, { Component } from 'react';
import "./SubForum.css"
import { Link } from 'react-router-dom';
import {modelInstance} from "../../model.js"

export default class SubForum extends Component {
  
  constructor(props) {
    super()
    this.state = {
      data: {topics: []},
      isLoggedIn: modelInstance.getLoggedIn()
    }
    modelInstance.addObserver(this)
  }
  componentDidMount() {
    fetch(`http://localhost:1337/f${this.props.match.params.id}`, {
      mode: "cors"
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({
        data: response
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  
  update() {
    this.setState({
      isLoggedIn: modelInstance.getLoggedIn()
    })
  }
  
  render() {
    const topics= this.state.data.topics.map(topic=> (
      <li key={topic.id}>{topic.title}</li>
    ))
    
    return (
      <div> 
        SubForum {this.props.match.params.id}
        <ul>
          {topics}
        </ul>
        
        {
          this.state.isLoggedIn &&  
            <Link to={"/f" + this.props.match.params.id + "/createTopic"}>Create new topic </Link>
        }
        <Link to="/">Go back to main</Link>
      </div>
    )
  }
}