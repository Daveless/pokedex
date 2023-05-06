
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Pokemon from './pages/Pokemon'
import AuthPokemonID from './pages/AuthPokemonID'

function App() {

  return (
    <div className='text-black flex align-center items-center justify-center'>
    

    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Auth/>} path='/pokedex'/>
      <Route element={<AuthPokemonID/>} path='/pokedex/:id'/>
    </Routes>

    </div>
  )
}

export default App
