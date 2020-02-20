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
    console.log(this.props.c)
    return (
      <div>
        <div>
            <button>{this.props.c[0]}</button>
            <button>{this.props.c[1]}</button>
            <button>{this.props.c[2]}</button>
            <button>{this.props.c[3]}</button>
        </div>
        <div>
          {/* make the next button add one to i in the app.jsx so that a new question is shown each time */}
          <button>Next</button>
        </div>
      </div>
    );
  }
}

export default Answer;