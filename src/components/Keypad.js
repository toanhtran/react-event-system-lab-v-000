import React from 'react';

class Keypad extends React.Components {
  constructor(props){
    super(props);
    this.state = {
      inout: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    handleChange(event){
      this.setState({
        input: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({
        input: '',
        submit: this.state.input
      });
    }

      render(){
        return(

        )
      }
    }
}

import default Keypad;
