import React, { Component } from 'react'
import './App.css'
import Search from"./components/Search/index"
import List from"./components/List/index"
export default class App extends Component {
  
  
  render() {
    return (
      <div className="container">
        <Search ></Search>
        <List ></List>
      </div>
    )
  }
}

