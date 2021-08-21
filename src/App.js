import React from 'react'
import Shelves from './Shelves'
import './App.css'
import { Link, Route } from 'react-router-dom';
import Search from './Search';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

      //the state contain teh objects displayed on myreads
      state ={
          books: [],
      }

      
      /**
       * fetching the books from the server when the component is mounted
       */
      componentDidMount(){
          BooksAPI.getAll()
          .then((books) => {
              this.setState(() => ({
                  books
              }));
          })
      }
      /**
       * when the user wants to move a book from a shelf to another
       * @param {
       * } shelf 
       * @param {*} book 
       */
      changeShelf = (shelf, book) =>{
          BooksAPI.update(book, shelf)
          .then(() => {
             this.setState((currentstate) => ({
                books : currentstate.books.map((b) => {
                  if(b.id === book.id)
                  {b.shelf = shelf}
                  return(b)
                  })
             }))
              })
          
          
      }
  render() {
    return (
      <div className="app">
        {/*adding router to the app to move between the search page and teh main page*/}
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
                {/*the button to move to the search part*/}
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
