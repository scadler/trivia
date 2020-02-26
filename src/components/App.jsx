import React, { Component } from 'react';
import '../css/App.css';
// import { render } from 'react-dom';
// import components
import Question from "./Question";
import Answer from "./Answer";
// import { buildFirebase } from '../clients/firebase.js';
// need to get code to confirm all fields are valid and loop through questions
class Question1 {
  constructor(choices, correct_choice_index, question_text, user_id){
      this.choices = choices;
      this.correct_choice_index = correct_choice_index;
      this.question_text = question_text;
      this.user_id = user_id;
  }
  // getChoice(this.choices);
  // getCorrect(this.correct_choice_index);
  // getQuestion(this.question_text);
  // getUserId(this.user_id);

  getQuestion(){
    return this.question_text;
  }
  getChoice(){
    return this.choices;
  }
  getQCorrect(){
    return this.correct_choice_index;
  }
  getUserId(){
    return this.user_id;
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { questionNumber: 0 }
    this.choiceClick = this.choiceClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  nextClick(){
    this.setState({ questionNumber: this.state.questionNumber + 1})
    console.log(this.state.questionNumber);
  }

  choiceClick(){

  }

  render() {

    return (
      <div className="app">
        <div className="trivia">
          <h1>Trivia!</h1>
        </div>
        <div>
            <div className="question">
              <Question q={this.props.question[this.state.questionNumber]}/>
            </div>
            <div className="answers">
              <Answer c={this.props.question[this.state.questionNumber].choices} cc={this.props.question[this.state.questionNumber].correct_choice_index}/>
            </div>
            <div>
            {/* make the next button add one to questionNumber in the app.jsx so that a new question is shown each time */}
            <button onClick= {this.nextClick} className= "next">Next</button>
          </div>
        </div>
      </div>
    );
  }
}



export default App;