import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';


import { Navbar } from './NavBar'


import { AuthProvider } from './auth'
import { Login } from './Login'

import { RequireAuth } from './RequireAuth'


import Home from './Home';
import Post from './Post';
import {Profile} from './Profile'

const NoMatch = ()=> <h2>Wrong page</h2>

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path="/post" element={<Post/>}/>
        <Route path='/login' element={<Login />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
       
      
   

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App