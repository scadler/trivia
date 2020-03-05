import React, { Component } from 'react';
import '../css/App.css';
// import components
import Beginning from "./Beginning";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { Start : false};
    this.startClick = this.startClick.bind(this);
  }

  startClick(){
    this.setState({ Start : true})
  }

  render() {  
    
    return (
      <div>
        <div className= "begin">
          {this.state.Start === false && <h1>Trivia</h1>}
        </div>
        <div className= "begin">
          {this.state.Start === false && <img src="https://i.imgur.com/ndnmqbq.png"></img>}
        </div>
        <div className= "start">
          {this.state.Start === false && <button onClick= {this.startClick}>Start Trivia</button>}
        </div>
        {this.state.Start && <Beginning question= {this.props.question}/>}
      </div>
    );
  }
}



export default App;