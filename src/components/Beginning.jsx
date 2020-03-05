import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question";
import Answer from "./Answer";
import Fini from "./Fini";

class Beginning extends Component{
    constructor(props){
        super(props);
        this.state = { questionNumber : 0, true : true, Score : 0, Surplus : false};
        this.nextClick = this.nextClick.bind(this);
        
      }

  nextClick(){
    this.setState({ questionNumber : this.state.questionNumber + 1})
    console.log(this.state.questionNumber);

    if (this.state.questionNumber >= this.props.question.length - 115){
      this.setState({Surplus : true})
    }

  }

    render(){
        return(
        <div className= "app">
            <div>
                <h1 className= "trivia">Trivia!</h1>
            <div>
                <h2>Score: {this.state.Score}</h2>
            </div>
            </div>
            <div>
                <div className= "question">
                {this.state.Surplus === false && <Question questionText={this.props.question[this.state.questionNumber]}/>}
                {this.state.Surplus && <Fini />}
                </div>
                <div className= "answers">
                {this.state.Surplus === false && <Answer choices={this.props.question[this.state.questionNumber].choices} correctChoice={this.props.question[this.state.questionNumber].correct_choice_index} key={this.state.questionNumber} addScore={(points)=>this.setState({Score: this.state.Score + points})}/>}
                </div>
                <div>
                {/* make the next button add one to questionNumber in the app.jsx so that a new question is shown each time */}
                {this.state.Surplus === false && <button onClick= {this.nextClick} className= "next">Next</button>}
            </div>
            </div>
      </div>
        );
    }
}

export default Beginning