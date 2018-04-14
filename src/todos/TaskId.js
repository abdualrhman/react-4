import React from 'react';

export default class TaskId extends React.Component {
  constructor(props){
    super(props)
    this.state={
      item : null
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    const {id} = this.props.match.params
  	fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`)
  	.then((response) => response.json())
	  .then((data) => {
      this.setState({
        item : data
      }, ()=>{console.log(this.state.item)})
	  })
  }
  render() {
    return (
      <div>
        {!this.state.item && <p>no data</p>}
        {this.state.item &&
          <div>
            <p>description : {this.state.item.description}</p>
            <p>deadline : {this.state.item.deadline}</p>
            <p>id : {this.state.item._id}</p>
          </div>
        }
      </div>
    );
  }
}
// https://hyf-react-api.herokuapp.com/todos/5ad1d19534e855002fdfbcb8
// https://hyf-react-api.herokuapp.com/todos/5ad1d19534e855002fdfbcb8
