import React, { Component } from "react";
//import components
import Score from "./Score";

let answered = false;
class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = { click : 0 };
  }
  
  handleClick(){
    this.setState()
  }

  correctClick0(answer){
    if (answer === 0){
      console.log(answer)
    }
  } 

  correctClick1(answer){
    if (answer === 1){
      console.log(answer)
    }
  }

  correctClick2(answer){
    if (answer === 2){
      console.log(answer)
    }
  }

  correctClick3(answer){
    if (answer === 3){
      console.log(answer)
    }
  }

  render() {
    console.log(this.props.c)
    console.log(this.props.cc)
    return (
      <div>
        <div id="answers">
            <button onClick = {() => this.correctClick0((this.props.cc))} className="b1">{this.props.c[0]}</button>
            <button onClick = {() => this.correctClick1((this.props.cc))} className="b2">{this.props.c[1]}</button>
            <button onClick = {() => this.correctClick2((this.props.cc))} className="b3">{this.props.c[2]}</button>
            <button onClick = {() => this.correctClick3((this.props.cc))} className="b4">{this.props.c[3]}</button>
        </div>
      </div>
    );
  }
}

export default Answer;