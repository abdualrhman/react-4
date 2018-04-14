import React from 'react';
import '../index.css';
import PropTypes from 'prop-types'



export default class TodoList extends React.Component {
  render() {
    const {todos, removeHandler, checkHandler} = this.props;
    return (
      <div>
      	<ul>
      		{
            todos.length > 0
            &&
      			todos.map(todo=>{

      				const index = todos.indexOf(todo)
            	return (
                todo &&
      					<li key={index}
                className={todo.done ? 'Checked' : 'btn'}>
      						{todo.description}
                  <input type='checkbox'
                  onChange={()=>checkHandler(index)}
                  checked={todo.done}/>

      						<button className='btn'
									onClick={()=>{removeHandler(index)}}>remove</button>
      					</li>)
      			})
      		}
          {
            todos.length===0
            &&
            <div>
            <p>loading tasks ...</p>
            <div className="loader"></div>
            </div>
          }
      	</ul>
      </div>
    );
  }
}
TodoList.propTypes={
  todos : PropTypes.array.isRequired,
  removeHandler : PropTypes.func.isRequired,
  checkHandler : PropTypes.func.isRequired,

}
