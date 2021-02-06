import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService/JeopardyService ";
class Jeopardy extends Component {
   constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: [],
      score: 0,
      answer:"",
      
    
    };
  }
  
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
      console.log(result)
      console.log(this.setState)

    })
}
    componentDidMount() {
        this.getNewQuestion();
  
}
updateScore=(event)=>{
    let dataAnswer=this.state.data.answer.toLowerCase();
    let userAnswer=this.state.answer.toLowerCase();
    if (dataAnswer === userAnswer){
        this.setState((state,props)=>({
        score:state.score + state.data.value,
        answer:"",
    }));
    }else{
        this.setState((state, props)=>({
            score: state.score - state.data.value,
            answer: "",
    
    }));
    }
};
  render(){
      let categoryTitle= "loading";

      if (this.state.data.category) {
          categoryTitle= this.state.data.category.title;
      }
    return (
      <div>
        <h4>question:{this.state.data.question}</h4>
        <h4>value: {this.state.data.value}</h4>
        <h4>categoryTitle</h4>
        <form onSubmit={this.updateScore}>
        
        <label>Enter Answer</label>
        <input type="text" name=""/>

            <button>Submit</button>
         </form>
    <h4>score:{this.state.score}</h4>
        
    </div>
    );
  }
}
export default Jeopardy;