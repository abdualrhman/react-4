import React from 'react';



export default class TodoForm extends React.Component {
  render() {
    return (
      <div>
      <input type='text' onChange={this.props.changeHandler}/>
      <br/>
      <button onClick={this.props.addingHandler}>add</button>
      </div>
    );
  }
}