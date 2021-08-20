import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Display from './Display';

/**
 * serach builds the search part of the app when the url change
 */
class Search extends Component{

    state = {
        query: '',
        books : [],
    }
    /**
     * handles query change and update teh displayed books accordingly
     * @param {*} text 
     */
    UpdateQuery(text){
        //hanlde late requests when the user deletes the input rapidly because the promises can return late
        setTimeout(() => {
            if(text === '')
            {
                this.setState(() => ({
                    query : text,
                    books : [],
                }));
            return;
            }
        },2000)
    /**
     * request for the books form the server
     */
    BooksAPI.search(text)
    .then((bookshelf) => {
        //handling empty strings to avoid errors
        if(text === '')
        {
            this.setState(() => ({
                query : text,
                books : [],
            }));
        return;
        }
        //handle empty queries
        if(bookshelf.error === "empty query")
        {
            this.setState(() => ({
                query : text,
                books : [],
            }));
            return;
        }
        const newBookshelf = bookshelf.map((book) => (this.Updateshelves(book)))
        this.setState(()=>({
            query : text,
        books : newBookshelf
        }));
    })
    }
    /**
     * add the 'shelf' field to each book
     * @param {*} book 
     * @returns updated book 
     */
    Updateshelves = (book) =>{
        let flag = false;
        //if a book matches an owned book give it the same shelf 
        (this.props.books.map((b) => {
            if(b.id === book.id)
            {
                book.shelf = b.shelf;
                flag = true;
            }
        }))
        if(flag === false)
        {
            book.shelf = "none";
        }
        return book;
    }


    render(){
        return(
        <div className="search-books">
          <div className="search-books-bar">
              {/*Back button*/}
              <Link
              to = "/"
              className = "close-search"
              >Back
              </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange ={(event) => this.UpdateQuery(event.target.value)}/>
                </div>
          </div>
               <Display
               arr = {this.state.books} 
               onChangeShelf = {this.props.changeShelf}
               />
        </div>
        )
    }
}

export default Search;