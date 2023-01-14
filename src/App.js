import React,{ Component } from "react";

class App extends Component {
  constructor(props) {
    
  }
  render() {
    return (
      <div className="App">
        <form>
          <label for="task">Add your task here:</label>
          <br />
          <input name="task"></input>
          <button type="submit" data-submit-btn>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
