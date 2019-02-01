import React, { Component } from "react";
import Button from "./button";
import Reset from "./Reset";

class App extends Component {
  state = {
    button: 0,
    reset: true
  };

  click = () => {
    this.setState({
      button: 1
    });
  };
  reset = () => {
    this.setState({
      button: 0
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.button == 0 && (
          <Button name={this.state.button} buttonClick={this.click} />
        )}
        {this.state.button == 1 && (
          <Button name={this.state.button} buttonClick={this.click} />
        )}
        {this.state.reset == true && (
          <Reset name={this.state.button} buttonClick={this.reset} />
        )}

        {/* {this.state.button == 1 ? <Button/> : <Button2/>} */}
      </React.Fragment>
    );
  }
}

export default App;
