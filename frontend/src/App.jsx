import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>

    <Route path="/" element = {< Nav />} />
    <Route path="/signin" element = {< SignIn />} />
      <Route path="/signup" element = {< SignUp />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App