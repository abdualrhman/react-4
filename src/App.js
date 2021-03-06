import React, { Component } from 'react';
import TodoManeger from './todos/TodoManeger.js';
import {Route, Link} from 'react-router-dom'
import TaskId from './todos/TaskId.js'


class App extends Component {
  render() {
    return (
      <div className="App">

      <Route exact path='/tasks' component={TodoManeger}/>
      <Route exact path='/tasks/:id' component={TaskId}/>
      <Route exact path='/home' component={()=>(
        <div>
          <h1>wellcome</h1>
        </div>
      )}/>
      <Route exact path='/' component={()=>(
        <div>
        <Link to='tasks'>tasks</Link>
        <br/>
        <Link to='home'>Home</Link>
        </div>
      )}/>
      </div>
    );
  }
}
// <TodoManeger/>

export default App;
