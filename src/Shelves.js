import React from 'react';

import Dispaly from './Display';


/**
 * shelves component take the books and changing shelves function as a prop and returns the main page of the app
 */
const Shelves = props =>{
        return(
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <Dispaly
                    arr = {props.books.filter((book) => {
                        return(book.shelf === "currentlyReading");
                    })}
                    onChangeShelf = {props.changeShelf}
                    />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <Dispaly
                    arr = {props.books.filter((book) => {
                        return(book.shelf === "wantToRead");
                    })}
                    onChangeShelf = {props.changeShelf}
                    />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <Dispaly
                    arr = {props.books.filter((book) => {
                        return(book.shelf === "read");
                    })}
                    onChangeShelf = {props.changeShelf}
                    />
                </div>
            </div>
        )
}

export default Shelves;