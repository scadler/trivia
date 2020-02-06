import React, { Component } from 'react';
import '../css/App.css';
import { render } from 'react-dom';
// import components
import Question from "Question.jsx"
import Answer from "Answer.jsx"

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    q : [
      new Question1[["answer1","answer2","answer3","answer4"], 1, "question1", "userId"],
      new Question1[["answer5","answer6","answer7","answer8"], 2, "question2", "userId"],
      new Question1[["answer9","answer10","answer11","answer12"], 3, "question3", "userId"],
      new Question1[["answer13","answer14","answer15","answer16"], 4, "question4", "userId"],
    ]
  }
}
  render() {
    return (
      <div className="app">
        Trivia!
        <div>
            <div className= "question">
                <Question q={this.state.q[0].question_text}/>
            </div>
            <div className= "answers">
                <Answer />
            </div>
        </div>
      </div>
    );
  }
}
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


export default App;