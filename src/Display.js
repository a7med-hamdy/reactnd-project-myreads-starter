import React from 'react';

const Display = props =>{
        return(
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.arr.map((book) =>(
                    <li key = {book.id}>
                    <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ 
                            width: 128, 
                            height: 193, 
                            //handling books with no thumbnail
                            backgroundImage: `url(${book.hasOwnProperty('imageLinks') ? book.imageLinks.smallThumbnail : null})` }}>
                          </div>
                          <div className="book-shelf-changer">
                              <select onChange = {(event) => props.onChangeShelf(event.target.value, book)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                          </div>
                          </div>
                        <div className="book-title">{book.title}</div>
                        {book.hasOwnProperty("authors") ? 
                        <div className="book-authors">
                          {book.authors.map((author) => (<p key = {author}>{author}</p>))}
                        </div>
                        : 
                        <div></div>}
                    </div>
                    </li>
                ))}
              </ol>
            </div>
        );
}

export default Display;