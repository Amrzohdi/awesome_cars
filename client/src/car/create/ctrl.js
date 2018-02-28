import React, { Component } from 'react';
import Form from './_form';
import axios from 'axios'

export default class CreateCarCtrl extends Component {
    state = {types: []};
    handleSubmit(data) {
        console.log(data);
    }
    componentDidMount() {
      var _this = this;

  }
    types(input, callback)  {
      return axios.get('http://localhost:8000/types/index')
      .then(function(response){
        console.log(response.data);
        callback(null,{options: [ {value: "1", lable: "12"} ]});
      });
    }
    render() {

        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)} types={this.types}></Form>
            </div>
        );
    }
}
