import React, { Component } from 'react';
// import components
import '../css/App.css';

class Question extends Component {
  
  render() {
    return (
      <div>
          <h1 className="title">{this.props.questionText.question_text}</h1>
      </div>
    );
  }
}

export default Question;