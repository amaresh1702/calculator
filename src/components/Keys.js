import React from 'react';

export class Keys extends React.Component{
    constructor(props) {
        super(props);
        this.values = {
          display:"0",
          answer: 0,
          num1: 0,
          num2: 0,
          opr: " "
        };
      }
      assignNumber=(event)=>{
        let val;
        let oper=['+','-','*','/','%']
          if(!this.values.num1 && this.values.opr===" "){
            val=(event.target.name);
            if(oper.indexOf(event.target.name)===-1 && this.values.display.toString().slice(-1)!=="."){
            // this.setState({display:val,answer:val,num1:val})
            this.values.display=val;
            this.values.answer=val;
            this.values.num1=val;
            }else if(this.values.display.toString().slice(-1)==="."){
            //   this.setState({display:this.values.display+event.target.name,answer:this.values.answer+event.target.name,num1:this.values.num1+event.target.name})
            this.values.display=this.values.display+event.target.name;
            this.values.answer=this.values.answer+event.target.name;
            this.values.num1=this.values.num1+event.target.name;
            }else{
              //this.setState({display:0+val,answer:0+val,num1:0,opr:val})
              this.values.display=0+val;
              this.values.answer=0+val;
              this.values.num1=0;
              this.values.opr=val;
            }
          }else if(this.values.opr===" " && !this.values.num2 ){
            if(oper.indexOf(event.target.name)===-1 ){
            val=this.values.num1+event.target.name;
            //this.setState({display:val,answer:val,num1:val})
            this.values.display=val;this.values.answer=val;this.values.num1=val;
            }else{
            val=this.values.num1;
            //this.setState({display:val+event.target.name,opr:event.target.name})
            this.values.display=val+event.target.name;this.values.opr=event.target.name;
            }
          }else if(this.values.opr!==" " && !this.values.num2 ){
            if(oper.indexOf(event.target.name)===-1 && this.values.display.toString().slice(-1)!=="."){
            val=event.target.name;
            //this.setState({display:this.values.num1+this.values.opr+val,answer:val,num2:val})
            this.values.display=this.values.num1+this.values.opr+val;this.values.answer=val;this.values.num2=val;
            }else if(this.values.display.toString().slice(-1)==="."){
              //this.setState({display:this.values.display+event.target.name,answer:this.values.num2+event.target.name,num2:this.values.num1+event.target.name})
              this.values.display=this.values.display+event.target.name;
              this.values.answer=this.values.num2+event.target.name;
              this.values.num2=this.values.num1+event.target.name;
            }
          }else if(this.values.opr!==" " && this.values.num2 ){
            if(oper.indexOf(event.target.name)===-1){
            val=this.values.num2+event.target.name;
            //this.setState({display:this.values.num1+this.values.opr+val,answer:val,num2:val})
            this.values.display=this.values.num1+this.values.opr+val;this.values.answer=val;this.values.num2=val;
            }else{
              try{
              val=eval(this.values.display);
              //this.setState({display:this.values.display+event.target.name,answer:val,num1:val,num2:0,opr:event.target.name})
              this.values.display=this.values.display+event.target.name;
              this.values.answer=val;
              this.values.num1=val;
              this.values.num2=0;
              this.values.opr=event.target.name;
              }catch(err){
                //this.setState({display:" ",answer:"result is undefined",num1:0,num2:0,opr:" "});
                this.values.display=" ";
                this.values.answer="result is undefined";
                this.values.num1=0;
                this.values.num2=0;
                this.values.opr=" ";
              }
            }
          }
          this.props.data.getOutput(this.values.display,this.values.answer);
      }
      clear=()=>{
        //this.setState({answer:0,display:"0",num1:0,num2:0,opr:" "});
        this.values.answer=0;
        this.values.display="0";
        this.values.num1=0;
        this.values.num2=0;
        this.values.opr=" ";
        this.props.data.getOutput(this.values.display,this.values.answer);
      }
      operations=(event)=>{
        if(event.target.name==="+/-"){
          if(this.values.opr===" "){
            let val=this.values.num1*-1;
            //this.setState({display:val+"",answer:val,num1:val})
            this.values.display=val+"";
            this.values.answer=val;
            this.values.num1=val;
          }else{
            let val=this.values.num2*-1;
            //this.setState({display:this.values.num1+this.values.opr+val,answer:val,num2:val})
            this.values.display=this.values.num1+this.values.opr+val;this.values.answer=val;this.values.num2=val;
          }
        }else if(event.target.name==="1/x"){
          if(this.values.opr===" "){
            let val=1/this.values.num1;
            //this.setState({display:val,answer:val,num1:val})
            this.values.display=val;this.values.answer=val;this.values.num1=val;
          }else{
            let val=1/this.values.num2;
            //this.setState({display:this.values.num1+this.values.opr+val,answer:val,num2:val})
            this.values.display=this.values.num1+this.values.opr+val;this.values.answer=val;this.values.num2=val;
          }
        }else if(event.target.name==="x2"){
          if(this.values.opr===" "){
            let val=Math.pow(this.values.num1,2);
           // this.setState({display:val,answer:val,num1:val})
           this.values.display=val;this.values.answer=val;this.values.num1=val;
          }else{
            let val=Math.pow(this.values.num2,2);
            //this.setState({display:this.values.num1+this.values.opr+val,answer:val,num2:val})
            this.values.display=this.values.num1+this.values.opr+val;this.values.answer=val;this.values.num2=val;
          }
        }else if(event.target.name==="2_/x"){
          if(this.values.opr===" "){
            let val=Math.pow(this.values.num1,1/2);
            //this.setState({display:val,answer:val,num1:val})
            this.values.display=val;this.values.answer=val;this.values.num1=val;
          }else{
            let val=Math.pow(this.values.num2,1/2);
            //this.setState({display:this.values.num1+this.values.opr+val,answer:val,num2:val})
            this.values.display=this.values.num1+this.values.opr+val;this.values.answer=val;this.values.num2=val;
          }
        }else if(event.target.name==="."){
          let val;
          if(this.values.opr===" " && this.values.num1.toString().includes(".")===false){
            val=event.target.name;
            //this.setState({display:this.values.num1+val,answer:this.values.num1+val,num1:this.values.num1+val})
            this.values.display=this.values.num1+val;
            this.values.answer=this.values.num1+val;
            this.values.num1=this.values.num1+val;
          }else if(this.values.opr!==" " && this.values.num2.toString().includes(".")===false){
            val=event.target.name;
            //this.setState({display:this.values.num1+this.values.opr+this.values.num2+val,answer:this.values.num2+val,num2:this.values.num2+val})
            this.values.display=this.values.num1+this.values.opr+this.values.num2+val;
            this.values.answer=this.values.num2+val;
            this.values.num2=this.values.num2+val;
          }
        }
        this.props.data.getOutput(this.values.display,this.values.answer);
      }
      delete=(event)=>{
        if(event.target.name==="ce"){
          if(this.values.opr===" "){
            //this.setState({display:0,answer:0,num1:0})
            this.values.display=0;this.values.answer=0;this.values.num1=0;
          }else{
            //this.setState({display:this.values.num1+this.values.opr+0,answer:0,num2:0})
            this.values.display=this.values.num1+this.values.opr+0;
            this.values.answer=0;
            this.values.num2=0;
          }
        }else if(event.target.name==="del"){
          if(this.values.opr===" "){
            let val=this.values.num1.toString();
          let val1=val.substring(0,val.length-1);
            //this.setState({display:(val1),answer:(val1),num1:(val1)})
            this.values.display=val1;this.values.answer=val1;this.values.num1=val1;
          }else{
            let val=this.values.num2.toString();
          let val1=val.substring(0,val.length-1);
            //this.setState({display:this.values.num1+this.values.opr+val1,answer:val1,num2:val1})
            this.values.display=this.values.num1+this.values.opr+val1;this.values.answer=val1;this.values.num2=val1;
          }
        }
        this.props.data.getOutput(this.values.display,this.values.answer);
      }
      onSubmit=()=>{
        try{
        let val=eval(this.values.display)
        if(isNaN(val)===false){
        //this.setState({display:this.values.display+"=",answer:val,num1:val,num2:0,opr:" "});
        this.values.display=this.values.display+"=";
        this.values.answer=val;
        this.values.num1=val;
        this.values.num2=0;
        this.values.opr=" ";
        }else{
          //this.setState({display:" ",answer:"result is undefined",num1:0,num2:0,opr:" "});
          this.values.display=" ";this.values.answer="result is undefined";this.values.num1=0;this.values.num2=0;this.values.opr=" ";
        }
        this.props.data.getOutput(this.values.display,this.values.answer);
        }catch(err){
          this.clear();
          //this.setState({answer:"invalid operation"})
          this.values.answer="invalid operation";
          this.props.data.getOutput(this.values.display,this.values.answer);
        } 
      }
    render() {
        const numbers=["/",7,8,9,"*",4,5,6,"-",1,2,3,"+"];
        const statements=[];
        for(var i of numbers){
          statements.push(<button className="keys" name={i} onClick={this.assignNumber}> {i} </button>);
        }
        return (
            <div>
              <button className="keys" name="%" onClick={this.assignNumber}> % </button>
              <button className="keys" name="ce" onClick={this.delete}> Ce </button>
              <button className="keys" name="c" onClick={this.clear}> C </button>
              <button className="keys" name="del"  onClick={this.delete}> Del </button>
              <button className="keys" name="1/x" onClick={this.operations}> 1/x </button>
              <button className="keys" name="x2" onClick={this.operations}> x^2 </button>
              <button className="keys" name="2_/x" onClick={this.operations}> 2_/x </button>
              {statements}
              <button className="keys" name="+/-" onClick={this.operations}> +/- </button>
              <button className="keys" name="0" onClick={this.assignNumber}> 0 </button>
              <button className="keys" name="." onClick={this.operations}> . </button>
              <button className="keys" name="equalTo" onClick={this.onSubmit}> = </button>
        </div>
        )
    }

}