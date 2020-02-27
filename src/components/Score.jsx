import React, { Component } from 'react';
import Answer from "./Answer";

class Score extends Component {
    
    render() {
      return (
            <div>
                <h2>Score: {this.props.s}</h2>
            </div>
        );
    }
  }
  
  export default Score;