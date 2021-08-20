import React from 'react'
import Shelves from './Shelves'
import './App.css'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Search from './Search';


class BooksApp extends React.Component {

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
              <Shelves />
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
          <Search />
        )} 
        />
      </div>
    )
  }
}

export default BooksApp;
