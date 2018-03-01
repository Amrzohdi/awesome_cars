import React, { Component } from 'react';
import Form from './_form';
var client = require('./../client');

export default class CreateCarCtrl extends Component {
    state = {types: []}
    //this is for handling the submission callback from the form
    handleSubmit(data) {
      var _this= this;
        client.post('/cars', {car: data}).then(function(response){
             window.location = "/cars";
        });
    }
    componentDidMount() {
      var _this = this;
      return client.get('/types/index')
      .then(function(response){
        _this.setState({types:response.data})
      });
  }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)} types={this.state.types}></Form>
            </div>
        );
    }
}
