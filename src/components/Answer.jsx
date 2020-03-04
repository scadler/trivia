import React, { Component } from "react";
//import components
import Right from "./Right";
import Wrong from "./Wrong";
import Hmm from "./Hmm";

class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = { Score : 0, correct: true, isEmptyState: null, Color1: null, Color2: null, Color3: null, Color4: null};
  }
  
  correctClick0(answer){
    if (answer === 0 && this.state.correct){  
      this.setState({Score : this.state.Score + 1, correct: false, isEmptyState: true, Color1: "aqua"}, () => {
        this.props.addScore(1)
      });
      console.log(answer)
    } else if (answer !== 0 && this.state.correct){
      this.setState({isEmptyState: false})
    }
    
  } 

  correctClick1(answer){
    if (answer === 1 && this.state.correct){
      this.setState({Score : this.state.Score + 1, correct: false, isEmptyState: true, Color2: "aqua"}, () => {
        this.props.addScore(1)
      });
      console.log(answer)
    } else if (answer !== 1 && this.state.correct) {
      this.setState({isEmptyState: false})
    }

  }

  correctClick2(answer){
    if (answer === 2 && this.state.correct){
      this.setState({Score : this.state.Score + 1, correct: false, isEmptyState: true, Color3: "aqua"}, () => {
        this.props.addScore(1)
      });
      console.log(answer)
    } else if (answer !== 2 && this.state.correct) {
      this.setState({isEmptyState: false})
    }

  }

  correctClick3(answer){
    if (answer === 3 && this.state.correct){
      this.setState({Score : this.state.Score + 1, correct: false, isEmptyState: true, Color4: "aqua"}, () => {
        this.props.addScore(1)
      })
      console.log(answer)
    } else if (answer !== 3 && this.state.correct) {
      this.setState({isEmptyState: false})
    }

  }

  render() {
    return (
      <div>
        <div id="answers">
          <div>
            {this.state.isEmptyState === null && <Hmm />}
            {this.state.isEmptyState === true && <Right />}
            {this.state.isEmptyState === false && <Wrong />}
          </div>
          <div>
            <button onClick = {() => this.correctClick0((this.props.correctChoice))} style={{backgroundColor:this.state.Color1}} className="b1">{this.props.choices[0]}</button>
            <button onClick = {() => this.correctClick1((this.props.correctChoice))} style={{backgroundColor:this.state.Color2}} className="b2">{this.props.choices[1]}</button>
            <button onClick = {() => this.correctClick2((this.props.correctChoice))} style={{backgroundColor:this.state.Color3}} className="b3">{this.props.choices[2]}</button>
            <button onClick = {() => this.correctClick3((this.props.correctChoice))} style={{backgroundColor:this.state.Color4}} className="b4">{this.props.choices[3]}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;