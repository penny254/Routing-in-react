import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
          };
          this.state = {
            submitted: false,
            formData: {
              firstName: '',
              lastName: ''
            }
      
        }
    }
        handleChange = (event) => {
          const formData = {...this.state.formData};
          FormData[event.target.name]=event.target.value;
          this.setState({formData});
        }
        resetForm = (event)=>{
          this.setState({
              submited: false,
              formData:{
               firstName:"",
               lastName:""   
              }
          })
      }
      handleSubmit = (event)=>{
          event.preventDefault();
  
          this.setState({
              submited:true
          })
      }  
      
  render() {
      if(this.state.submitted)
      {
        return (
          <div className="Contact">
            <p>Thanks,
              {this.state.formData.FistName},for submiting the form</p>
            <button onClick={this.resetForm}>Rest Form</button>
            </div>
            )
        }
              return(
              <div className="Contact">

              <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">First Name</label>
                      <input 
                        type="text" 
                          name="firstName"
                          ame="lastName"
                          value={this.state.formData.lastName}
                          onChange={this.handleChange} 
                      placeHolder="firstName"/>
                      </div>
                    <button>Submit Form</button>
              </form>
                        
          </div>
                
                
      );
    }
     
}
export default Contact;