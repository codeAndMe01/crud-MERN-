import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import User from './Components/User'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'


import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
    
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<User/>}></Route>
            <Route path='/create' element={<CreateUser/>}></Route>
            <Route path='/update/:id' element={<UpdateUser/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
