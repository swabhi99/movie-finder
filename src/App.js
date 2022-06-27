import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Error from './Error'
import Home from './Home'
import Movie from './SingleMovie'

function App() {
   return(
   <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path='/movies/:id' element={<Movie></Movie>}></Route>
      <Route path='/*' element={<Error></Error>}></Route>
   </Routes>
   )
}

export default App
