import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Display from './Display';


class Search extends Component{

    state = {
        query: '',
        books : [],
    }
    UpdateQuery(text){
        
        console.log(text);
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
        
        BooksAPI.search(text)
        .then((bookshelf) => {
            console.log(bookshelf);
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
            this.setState(()=>({
                query : text,
                books : bookshelf
            }));
        })
    }
    render(){
        return(
        <div className="search-books">
          <div className="search-books-bar">
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
               />
        </div>
        )
    }
}

export default Search;