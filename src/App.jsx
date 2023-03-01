import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'
import	'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="visitante n°35"/>
    </div>
  )
}

export default App
