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
    this.state = {
      q : [
        new Question1 ("dhedge", "gfdyfdey", "gde", "ydud")
      ]
    }
  }
  render() {
    return (
      <div className="app">
        Trivia!
        <div>
            <div className="question">
              <Question q={this.props.question[1]}/>
            </div>
            <div className="answers">
              <Answer />
            </div>
        </div>
      </div>
    );
  }
}



export default App;