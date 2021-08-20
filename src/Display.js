import React from 'react';
const shelves = ["move","currentlyReading","wantToRead","read", "none"];
const seen = ["Move to...", "Currently Reading", "Want to Read", "Read", "None"]


const Display = props =>{
  const construct = (book) =>{
    const comp = []; 
    for(let i = 0; i < shelves.length; i++)
    {
      //first component is special
      if(i === 0)
      {
        comp.push(<option value = {shelves[i]} hidden key = {shelves[i]}>{seen[i]}</option>);
        continue;
      }
      //if the element is already on a shelf grey out this option
      if(shelves[i] === book.shelf)
      {
        //comp.push(<option value = {shelves[i]} disabled key = {shelves[i]}>{seen[i]}</option>);
        continue;
      }
      comp.push(<option value = {shelves[i]} key = {shelves[i]}>{seen[i]}</option>);
    }
    return comp;
} 
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
                                {construct(book)}
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