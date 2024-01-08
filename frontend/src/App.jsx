import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home.jsx';
const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>

    <Route path="/" element = {< Home />} />
    <Route path="/signin" element = {< SignIn />} />
      <Route path="/signup" element = {< SignUp />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App