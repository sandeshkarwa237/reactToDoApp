import React, { Component } from 'react';
import './App.css';

class FormInput extends Component {
  constructor(){
    super();
    this.completedCount=0;
    this.strikeClass=[];
    this.state={
      taskField:'',
      taskName:[]
    }
    this.sendTask=this.sendTask.bind(this);   
    this.taskCompleted=this.taskCompleted.bind(this); 
  }

taskEntered = (e) => {
  this.setState({taskField:e.target.value});
}

sendTask = (event) => {
  event.preventDefault();
  if(this.state.taskField.trim()===''){
    return null;
  }
  this.state.taskName.push(this.state.taskField)
  this.setState({taskName:this.state.taskName,taskField:''});
}

taskCompleted = (index,event) => {
  if(this.strikeClass[index]!==true){
    this.completedCount=this.completedCount+1;
    this.strikeClass[index]=true;
  }
  else{
    this.completedCount=this.completedCount-1;
    this.strikeClass[index]=false;
  }
  this.setState({taskName:this.state.taskName});
}

  render() {
    const that=this;
    const taskNameWithDetails=this.state.taskName.map(function(value,index){
      return <div><input type="checkbox" onClick={that.taskCompleted.bind(value,index)} /><span className={that.strikeClass[index]===true ? 'strikeText' : null}>{value}</span></div>;
    });
    return (
      <div className="App-intro">
          <form onSubmit={this.sendTask}>
            <input type="text" onChange={this.taskEntered.bind(this)} value={this.state.taskField} placeholder="Enter your task"/>
          </form>
          {taskNameWithDetails}
          <div>{taskNameWithDetails.length} : All</div> {this.completedCount} : Completed
      </div>
    );
  }
}

export default FormInput;
