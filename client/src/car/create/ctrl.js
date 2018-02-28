import React, { Component } from 'react';
import Form from './_form';
import axios from 'axios'
import { BrowserRouter as Router , Route } from 'react-router-dom'

export default class CreateCarCtrl extends Component {
    state = {types: []}
    handleSubmit(data) {
      var _this= this;
        axios.post('http://localhost:8000/cars', {car: data}).then(function(response){
             window.location = "/cars";
        });
    }
    componentDidMount() {
      var _this = this;
      return axios.get('http://localhost:8000/types/index')
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
