import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import BoatList from './components/BoatList/'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/' render={() => <BoatList />} />
        <Route exact path='/search' render={() => <BoatList />} />
      </BrowserRouter>
    </div>
  )
}

export default App
