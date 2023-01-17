import React,{ Component } from "react";

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

    // Read current task array from the state.
    const currentTaskArray = this.state.taskArray;
    const inputTextboxValue = document.querySelector("[data-input-textbox]").value;
    // Push the current input textbox value into the current task array.
    currentTaskArray.push(inputTextboxValue);
    // Assign the state to current task array.
    this.setState({
      taskArray: currentTaskArray,
    })
    console.log(`Task aray ${this.state.taskArray}`);
  }

  render() {
    return (
      <div className="App">
        <form>
          <label for="task">Add your task here:</label>
          <br />
          <input name="task" data-input-textbox></input>
          <button type="button" data-submit-btn onClick={this.onClickBtn}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
