import React, { Component } from 'react';
import TodoManeger from './todos/TodoManeger.js';



class App extends Component {
  render() {
    return (
      <div className="App">
      <TodoManeger/>
      </div>
    );
  }
}

export default App;
