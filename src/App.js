import './App.css';
import React from 'react';
import {Output} from './components/Output';
import {Keys} from './components/Keys';
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        display:"0",
        answer: 0
      };
    }
    getOutput(disp,ans){
      this.setState({display:disp,answer:ans})
    }
  render() {
    return (  
      <div className="App">
        <Output data={{
        display:this.state.display,
        answer: this.state.answer
        }}/>
        <br />
        <Keys data={{
      getOutput:this.getOutput.bind(this)
        }} />
      </div>
    );
  }
}

export default App;
