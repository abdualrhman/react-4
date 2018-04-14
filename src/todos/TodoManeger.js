import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

const url = 'https://hyf-react-api.herokuapp.com/todos';

export default class TodoManeger extends React.Component {
  constructor(props){
  	super(props)
  	this.state={
  		deadlineValue : '2/2/2012',
  		todoValue : null,
  		todoList : [],
      loading : true,
  	}
  	this.changeFunc=this.changeFunc.bind(this)
  	this.addingFunc=this.addingFunc.bind(this)
  	this.fetchData=this.fetchData.bind(this)
  	this.removeFunc=this.removeFunc.bind(this)
    this.checkFunc=this.checkFunc.bind(this)
  }

  changeFunc(event){
  	this.setState({
  		todoValue : event.target.value
  	})
  }
  addingFunc(){
  	const {todoValue, todoList, deadlineValue} = this.state;
  	const item = {description: todoValue, deadline: deadlineValue};
  	const newList = [...todoList, item]

  	fetch(`${url}/create`, {
  		method: 'POST',
 		  body: JSON.stringify(item),
  		headers: new Headers({
    		'Content-Type': 'application/json'
  		})
	})
	.then(()=>{
		this.setState({
			todoList : newList
		}, ()=>{console.log(this.state.todoList)})
	})
	.catch(()=>{console.log('errrrrrr')})
  }
  fetchData(){
  	fetch(url)
  	.then((response) => response.json())
	.then((data) => {
	this.setState({
		todoList: data,
    loading : false
		}, ()=>{console.log(this.state.todoList)})
	})
  }
  componentDidMount(){
  	this.fetchData()
  }
  removeFunc(index){
  	const {todoList} = this.state;
    const newList = [...todoList]
  	const item = newList[index]
  	// console.log(todoList[index])
        delete newList[index]
  	fetch(`${url}/${item['_id']}`, {
  		method : 'DELETE',
  		body : JSON.stringify(item)
  	})
  	.then(this.setState({
  		todoList : newList,
  	}))
  }
  checkFunc(index){
    const {todoList} = this.state;
    const item = todoList[index]
    const newItem = {...item, done : !item.done}
    const newList = [...todoList]
    newList[index] = newItem
    fetch(`${url}/${item._id}`, {
      method : 'PATCH',
      body : JSON.stringify(newItem),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    })
    .then(()=>{
      this.setState({
        todoList : newList
      })
    })
    console.log(newList)
  }


  render() {
    return (
      <div>
      <TodoForm
      	changeHandler={this.changeFunc}
     	 addingHandler={this.addingFunc}
      />

      <TodoList
      	todos={this.state.todoList}
      	removeHandler={this.removeFunc}
        checkHandler={this.checkFunc}
        loading={this.state.loading}
      	/>
      </div>
    );
  }
}
