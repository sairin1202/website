import React from 'react';
import ReactDOM from 'react-dom';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';




export default class InputField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('提交的名字: ' + this.state.value);
      event.preventDefault();
    }


    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <TextField id="title" label="Title" onChange={this.handleChange}/>
            <TextField id="story" label="Generate Story" InputProps={{ readOnly: true,}}/>
        </form>
      );
    }
  }