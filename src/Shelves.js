import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Dispaly from './Display';


class Shelves extends Component{
    state ={
        books: [],
    }

    componentDidMount(){
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                books
            }));
        })
    }

    changeShelf = (shelf, book) =>{
        BooksAPI.update(book, shelf)
        .then(() => {
            BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }));
            })
        });
        
    }

    render(){
        return(
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <Dispaly
                    arr = {this.state.books.filter((book) => {
                        return(book.shelf === "currentlyReading");
                    })}
                    onChangeShelf = {this.changeShelf}
                    />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <Dispaly
                    arr = {this.state.books.filter((book) => {
                        return(book.shelf === "wantToRead");
                    })}
                    onChangeShelf = {this.changeShelf}
                    />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <Dispaly
                    arr = {this.state.books.filter((book) => {
                        return(book.shelf === "read");
                    })}
                    onChangeShelf = {this.changeShelf}
                    />
                </div>
            </div>
        )
    }
}

export default Shelves;