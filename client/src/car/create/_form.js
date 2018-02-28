import React, { Component } from 'react';
var createClass = require('create-react-class');
var Select = require('react-select');
import 'react-select/dist/react-select.css'

const Form = createClass({

    getInitialState() {
      console.log(Select)
        return {
            body: this.props.body || '11111',
            title: this.props.title || '2222'
        }

    },
    //
    // componentWillReceiveProps(props) {
    //     this.setState(props);
    // },
    //
    // handleBodyChange(e) {
    //     this.setState({
    //         body: e.target.value
    //     });
    // },
    //
    // handleTitleChange(e) {
    //     this.setState({
    //         title: e.target.value
    //     });
    // },
    //
    handleSubmit(e) {
      this.props.onSubmit(this.state);
    },

    render() {
      console.log(this);
        return (
            <form name="create_car" onSubmit={this.handleSubmit}>
            <Select.Async name="form-field-name" loadOptions={this.props.types}/>
              <input type="text" value={this.props.body}  />
              <input type="text" value={this.props.title}  />
              <button type="submit">Submit</button>
            </form>
        );
    }
});

export default Form;
