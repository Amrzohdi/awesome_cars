import React, { Component } from 'react';
var createClass = require('create-react-class');


const Form = createClass({
    handleSubmit(e) {
      e.preventDefault();
      this.props.onSubmit(this.state);
    },
    changeType: function(event){
        this.setState({type_id: event.target.value});
    },
    handleNameChange: function(event){
        this.setState({name: event.target.value});
    },
    handlePriceChange: function(event){
        this.setState({price: event.target.value});
    },
    handleHorsepowerChange: function(event){
        this.setState({horsepower: event.target.value});
    },

    render() {
      let options = this.props.types.map( (type) => {
         return <option key={type.id} value={type.id}>{type.name}</option>;
       })
        return (
            <form name="create_car" onSubmit={this.handleSubmit}>
              <label>Car Type</label>
              <select onChange={this.changeType} >
                  <option >nothing selected</option>;
                  {options}
              </select>
              <label>Car name</label>
              <input type="text" value={this.props.name} onChange={this.handleNameChange} />
              <label>Car price</label>
              <input type="number" value={this.props.price}  onChange={this.handlePriceChange} />
              <label>Car HorsePower</label>
              <input type="number" value={this.props.horsepower} onChange={this.handleHorsepowerChange} />
              <button type="submit">Submit</button>
            </form>
        );
    }
});

export default Form;
