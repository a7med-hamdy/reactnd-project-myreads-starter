import React, { Component } from 'react';

import Dispaly from './Display';



class Shelves extends Component{
    

    render(){
        return(
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <Dispaly
                    arr = {this.props.books.filter((book) => {
                        return(book.shelf === "currentlyReading");
                    })}
                    onChangeShelf = {this.props.changeShelf}
                    />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <Dispaly
                    arr = {this.props.books.filter((book) => {
                        return(book.shelf === "wantToRead");
                    })}
                    onChangeShelf = {this.props.changeShelf}
                    />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <Dispaly
                    arr = {this.props.books.filter((book) => {
                        return(book.shelf === "read");
                    })}
                    onChangeShelf = {this.props.changeShelf}
                    />
                </div>
                
                
            </div>
        )
    }
}

export default Shelves;