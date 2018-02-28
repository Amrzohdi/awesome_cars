import React, { Component } from 'react';
var createClass = require('create-react-class');


const Form = createClass({
      getInitialState() {
        var _this = this;
         return {
          params: {},
          carCallback: function(cars){
            _this.props.cars = cars;
          }
         }
     },
    handleNameChange: function(event){
      // console.log(this);
      // console.log(event.target.value);
      var _this = this;
      this.state.params.by_name = event.target.value;
      this.props.carSearch(this.state.params, this.state.carCallback);
    },
    handleChangeType: function(event){
      // console.log(this);
      // console.log(event.target.value);
      this.state.params.by_type_id = event.target.value;
      this.props.carSearch(this.state.params);
    },
    render() {
      let cars = this.props.cars.map((car) => {
         return <tr key={car.id}><td>{car.name}</td><td>{car.price}</td> <td>{car.horsepower}</td></tr>
       });
      let options = this.props.types.map((type) => {
         return <option key={type.id} value={type.id}>{type.name}</option>;
       });
        return (
          <div>
            <div>
              <label> search by name </label>
              <input type="text" value={this.props.name} onChange={this.handleNameChange} />
              <label> search by type </label>
              <select onChange={this.handleChangeType} >
                  <option >nothing selected</option>;
                  {options}
              </select>
            </div>
            <table >
            <tbody>
              <tr>
                <th>name</th>
                <th>price</th>
                <th>horsepower</th>
              </tr>
                {cars}
              </tbody>
            </table>

          </div>
        );
    }
});

export default Form;
