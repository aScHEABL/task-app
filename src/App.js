import React,{ Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("Submit button has been clicked!");
  }

  render() {
    return (
      <div className="App">
        <form>
          <label for="task">Add your task here:</label>
          <br />
          <input name="task"></input>
          <button type="button" data-submit-btn onClick={this.onClickBtn}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
