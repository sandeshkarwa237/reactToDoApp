import React, { Component } from 'react';
import './App.css';
import FormInput from './InputField';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="panel-group">
          <div className="panel panel-info">
            <div className="App-title panel-heading">To do Lists</div>
            <div className="panel-body">
              <FormInput />
            </div>
          </div>          
        </div>       
      </div>
    );
  }
}

export default App;
