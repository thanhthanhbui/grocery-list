import React, { Component } from 'react';
import './App.css';
import List from "./List";
import GroceryForm from "./GroceryForm";

class App extends Component {
  state = {
    groceries: [
      {id: 1, name: "Buy Egg", complete: false, },
      {id: 2, name: "Buy Beef", complete: false, },
      {id: 3, name: "Buy Milk", complete: false, },
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  addItem = (name) => {
    const grocery = {id: this.getId(), name, complete: false}
    this.setState({ groceries: [grocery, ...this.state.groceries]})
  }

  removeItem (e) {
    this.setState({
      newGroceries: this.state.groceries.filter(newGrocery => {
        return newGrocery !== e.target.value
      })
    })
  }

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map(grocery => {
        if (grocery.id === id) {
          return {...grocery, complete: !grocery.complete}
        }
        return grocery
      })
    })
  }

  render() {
    return (
      <div className="App">
        <GroceryForm addItemFunction={this.addItem} />
        <List 
          name="Grocery List" 
          items={this.state.groceries} 
          groceryClick={this.handleClick}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
