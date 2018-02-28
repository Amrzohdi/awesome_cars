import React, { Component } from 'react';
import Form from './_table';
import axios from 'axios'

export default class ListCarsCtrl extends Component {
    state = {types: [], cars:[]}
    handleSubmit(data) {
      var _this= this;
        axios.post('http://localhost:8000/cars', {car: data}).then(function(response){
             window.location = "/cars";
        });
    }
    componentDidMount() {
      var _this = this;
      axios.get('http://localhost:8000/types/index')
      .then(function(response){
        _this.setState({types:response.data})
      });
      this.getCars();
    }
    getCars = function(params, callback){
      var _this = this;
      return axios.get('http://localhost:8000/cars',{params: params})
      .then(function(response){
        if(params)
          callback(response.data);
        else
          _this.setState({cars:response.data})
      });
    }
    render() {
        return (
            <div>
                <Form cars={this.state.cars} types={this.state.types} carSearch={this.getCars}></Form>
            </div>
        );
    }
}
