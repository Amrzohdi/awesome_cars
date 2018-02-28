import React, { Component } from 'react';
var createClass = require('create-react-class');


const Form = createClass({

    render() {
      console.log(this.props)
      let cars = this.props.cars.map((car) => {
         return <tr><td>{car.name}</td><td>{car.price}</td> <td>{car.horsepower}</td></tr>
       });
        return (
          <table >
            <tr>
              <th>name</th>
              <th>price</th>
              <th>horsepower</th>
            </tr>
            {cars}
          </table>
        );
    }
});

export default Form;
