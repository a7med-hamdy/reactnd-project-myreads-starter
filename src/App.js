import React from 'react'
import Shelves from './Shelves'
import './App.css'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Search from './Search';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {


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
  render() {
    return (
      <div className="app">
        <Route
          exact path = "/"
          render = {() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Shelves 
              books = {this.state.books}
              changeShelf = {this.changeShelf}
              />
              <div className="open-search">
                <Link
                to = "/search"
                className = "Link"
                >Add a book</Link>
              </div>
          </div>
          )} 
        />
        <Route
        path = '/search'
        render = {() => (
          <Search
          books = {this.state.books}
          changeShelf = {this.changeShelf} 
          />
        )} 
        />
      </div>
    )
  }
}

export default BooksApp;
