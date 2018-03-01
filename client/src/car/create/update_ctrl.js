import React, { Component } from 'react';
import Form from './_form';
import axios from 'axios'

export default class UpdateCarCtrl extends Component {
    state = {types: [], car:{horsepower: null}}
    handleSubmit(data) {
      var _this= this;
      if(data == undefined)
        data= {};
      var params = {
        horsepower: (data.horsepower==undefined)? this.state.car.horsepower : data.horsepower,
        name: (data.name==undefined)?  this.state.car.name : data.name,
        price: (data.price == undefined)?  this.state.car.price : data.price,
        type_id: (data.type_id == undefined)? this.state.car.type_id : data.type_id
      }
        axios.put('http://localhost:8000/cars/'+this.props.match.params.id, {car: params}).then(function(response){
             window.location = "/cars";
        });
    }
    componentDidMount() {
      var _this = this;
      axios.get('http://localhost:8000/types/index')
      .then(function(response){
        _this.setState({types:response.data})
      });
      axios.get('http://localhost:8000/cars/'+this.props.match.params.id)
      .then(function(response){
        _this.setState({car:response.data})
      });
  }
    render() {
        return (
            <div>
                <Form
                  horsepower={this.state.car.horsepower}
                  name={this.state.car.name}
                  type_id={this.state.car.type_id}
                  price={this.state.car.price}
                   onSubmit={this.handleSubmit.bind(this)}
                   types={this.state.types}></Form>
            </div>
        );
    }
}