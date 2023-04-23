import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Booklist from './components/Booklist'
import AddBook from './components/AddBook'
import Record from './components/Record'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
    <Route exact path='/' Component={Register}/>
    <Route exact path='/login' Component={Login}/>
    <Route exact path='/Booklist' Component={Booklist}/>
    <Route exact path='/addbook' Component={AddBook}/>
    <Route exact path='/Record' Component={Record}/>
    </Routes>
      
    </Router>
   
  )
}

export default App