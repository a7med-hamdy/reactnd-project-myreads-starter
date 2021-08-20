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
            <div>
            <Dispaly
            arr = {this.state.books.filter((book) => {
                return(book.shelf === "currentlyReading");
            })}
            title = "Currently Reading" 
            onChangeShelf = {this.changeShelf}
            />
            <Dispaly
            arr = {this.state.books.filter((book) => {
                return(book.shelf === "wantToRead");
            })}
            title = "Want to Read" 
            onChangeShelf = {this.changeShelf}
            />
            <Dispaly
            arr = {this.state.books.filter((book) => {
                return(book.shelf === "read");
            })}
            title = "Read" 
            onChangeShelf = {this.changeShelf}
            />
            </div>
        )
    }
}

export default Shelves;