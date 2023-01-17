import React,{ Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);

    this.state = {
      taskArray: [],
    }
  }

  onClickBtn() {
    console.log("Submit button has been clicked!");

    this.setState({ taskArray: [...this.state.taskArray, document.querySelector("[data-input-textbox]").value] })
  }

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="task">Add your task here:</label>
          <br />
          <input name="task" data-input-textbox></input>
          <button type="button" data-submit-btn onClick={this.onClickBtn}>Submit</button>
          <Overview taskArray={this.state.taskArray} />
        </form>
      </div>
    );
  }
}

export default App;
