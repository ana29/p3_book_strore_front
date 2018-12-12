import React, {Component} from 'react';
import './App.css';
import BookList from '../BookList/BookList';
import SearchBox from '../SearchBox/SearchBox';
import { books } from "../books";

class App extends Component {

    constructor() {
        super();
        this.state = {
            books: books,
            searchField: ""
        };
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const filteredBooks = this.state.books.filter(book => {
            return book.title.toLowerCase().includes(this.state.searchField.toLowerCase())
        });

        return (
            <div className="App header">
                <h1 className="Title">P3 Bookstore</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <BookList books={filteredBooks}/>
            </div>
        );
    }
}

export default App;
