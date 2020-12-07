import React from 'react';
import './output.css';
 export class Output extends React.Component{
render(){
  return (<div className="output"> 
  <p> {this.props.data.display} </p>
  <h2 style={{marginTop:"-7px"}}> {this.props.data.answer} </h2></div>)
}
}
