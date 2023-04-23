import React from 'react'
import { Link } from 'react-router-dom'

function AddBook() {
  return (
    <div className='main'>
        <Link to = '/Booklist'>
        <button id='addbook-button'>Show Book list</button>
  </Link>
        <h1 id ='addbook-title'>Add Book</h1>
        <h5 id='create-book'>Create New Book</h5>
        <form className='addbook'>
  <div class="form-group">
    
    <input id = "addbook-input" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Title Of the Book"/>
  </div>
  <div class="form-group">
    
    <input id = "addbook-input" type="text" class="form-control"  placeholder="ISBN"/>
  </div>
  <div class="form-group">
  
    <input id = "addbook-input" type="text" class="form-control"  placeholder="Author"/>
  </div>
  <div class="form-group">
    
    <input id = "addbook-input" type="text" class="form-control"  placeholder="Describe The Book"/>
  </div>
  <div class="form-group">
 
    <input id = "addbook-input" type="text" class="form-control"  placeholder="published_date"/>
  </div>
  <div class="form-group">

    <input id = "addbook-input" type="text" class="form-control"  placeholder="publisher of this Book"/>
  </div>

  <Link to = '/Record'>
  <button id='addbook-submit' type="submit" class="btn btn-primary">Submit</button>

  </Link>
</form>
    </div>
  )
}

export default AddBook