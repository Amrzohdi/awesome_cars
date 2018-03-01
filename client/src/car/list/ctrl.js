import React, { Component } from 'react';
import Form from './_table';
var client = require('./../client');

export default class ListCarsCtrl extends Component {
    state = {types: [], cars:[]}
    handleSubmit(data) {
      var _this= this;
        client.post('/cars', {car: data}).then(function(response){
             window.location = "/cars";
        });
    }
    componentDidMount() {
      var _this = this;
      client.get('/types/index')
      .then(function(response){
        _this.setState({types:response.data})
      });
    }
    getCars = function(params, callback){
      var _this = this;
      client.get('/cars',{params: params})
      .then(function(response){
        callback(response.data);
      });
    }
    deleteCar = function(car_id,callback){
      return client.delete('/cars/'+car_id);
    }
    render() {
        return (
            <div>
                <a  href="/cars/create" class="active"> new car</a>
                <Form deleteCar={this.deleteCar} types={this.state.types} carSearch={this.getCars}></Form>
            </div>
        );
    }
}
