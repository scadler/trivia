import React, { Component } from "react";
//import components

class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = { click : 0 };

  }

  handleClick(){
    this.setState({click : 5})
    // return
    //     <h1><h1>
  }
    render() {
      return (
        <div>
            <button onClick = {() => this.handleClick()}>A{this.state}</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
        </div>
      );
    }
  }
  
  export default Answer;