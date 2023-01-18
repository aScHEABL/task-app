import React, { Component } from "react";
import Overview from "./components/Overview"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      inputValue: "",
    }
  }


  
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.inputValue],
      inputValue: "",
    })
  }
  render() {
    const { inputValue, tasks } = this.state;
    return (
      <div>
      <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <br />
          <input 
          name="taskInput" 
          onChange={this.handleChange} 
          value={inputValue} 
          type="text"
          data-task-input />
          <button type="submit">Submit</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    )
  }
}

export default App;