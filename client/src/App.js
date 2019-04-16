import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header'
import SubForum from './components/SubForum/SubForum'
import Register from './components/Register/Register'
import Login from './components/Authentication/Login'
import Logout from './components/Authentication/Logout'
import CreateTopic from './components/CreateTopic/CreateTopic'
import Topic from './components/Topic/Topic'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path="/" component={Header}/>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/logout" component={Logout}/>
          <Route exact path="/f:id" component={SubForum}/>
          <Switch>
            <Route exact path="/f:id/createTopic" component={CreateTopic}/>
            <Route exact path="/f:forumId/t:topicId" component={Topic}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;