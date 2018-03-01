import React, { Component } from 'react';
var createClass = require('create-react-class');


const Form = createClass({
      gotCarsCallback: function(cars){
          this.setState({cars: cars})
      },
      getInitialState() {
        this.props.carSearch([], this.gotCarsCallback);
         return {
          params: {},
          cars: [],
         }
     },
    handleNameChange: function(event){
      this.state.params.by_name = event.target.value;
      this.props.carSearch(this.state.params, this.gotCarsCallback);
    },
    handleChangeType: function(event){
      this.state.params.by_type = event.target.value;
      this.props.carSearch(this.state.params, this.gotCarsCallback);
    },
    handleHorsepowerChange: function(event){
      this.state.params.by_horsepower = event.target.value;
      this.props.carSearch(this.state.params, this.gotCarsCallback);
    },
    deleteCar: function(event){
      var _this = this
      this.props.deleteCar(event.target.value, this.deleteCarCallback).then(function(response){
        var cars = _this.state.cars;
        _this.state.cars.forEach(function(car,index){
          if(car.id == response.data.id)
            cars.splice(index,1);
        });
        _this.setState({cars: cars})

      });
    },
    render() {
      let cars = this.state.cars.map((car) => {
         return (
                  <tr key={car.id}>
                      <td>{car.name}</td>
                      <td>{car.price}</td>
                      <td>{car.horsepower}</td>
                      <td>{car.type.name}</td>
                      <td><button onClick={this.deleteCar} value={car.id} type="button">DELETE</button></td>
                      <td><a  href={"/cars/update/"+car.id} class="active">UPDATE</a></td>
                  </tr>)
       });
      let options = this.props.types.map((type) => {
         return <option key={type.id} value={type.id}>{type.name}</option>;
       });
        return (
          <div>
            <div>
              <label> search by name </label>
              <input type="text" onChange={this.handleNameChange} />
              <label> search by horsepower </label>
              <input type="number" onChange={this.handleHorsepowerChange} />
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
                <th>type</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
                {cars}
              </tbody>
            </table>

          </div>
        );
    }
});

export default Form;
