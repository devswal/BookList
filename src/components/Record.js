import React from 'react'
import { Link } from 'react-router-dom'
function Record() {
  return (
    <div className='record'>
         <Link to = '/Booklist'>
         <button id='show-book'>Show Book List</button>
  </Link>
        <h1 id='record-title'>Book's Record</h1>
        <h4 id='record-title'>View Book's Info</h4>
        <table class="table table-dark" id='record-table'>
  <thead>
    
  </thead>
  <tbody>
  <tr>
      <th scope="row">1</th>
      <td>Title</td>
      <td>The Hunger Games</td>
      
    </tr>
  
    <tr>
      <th scope="row">2</th>
      <td>Author</td>
      <td>Suzzane collins</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ISBN</td>
      <td>kda55ad</td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Publisher</td>
      <td>No One</td>
     
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Published Date</td>
      <td>4-23-2023</td>
    
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Description</td>
      <td>Popular</td>
     
    </tr>
  </tbody>
</table>
<button id='delete-book'>Delete Book</button>
<button id='edit-book'>Edit Book</button>
    </div>
  )
}

export default Record