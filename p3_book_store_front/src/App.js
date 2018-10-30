import React, { Component } from 'react';
import './App.css';
import BookList from './BookList';
import SearchBox from './SearchBox';
import {books} from "./books";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>p3bookstore</h1>
          <SearchBox/>
          <BookList books={books}/>
      </div>
    );
  }
}

export default App;
