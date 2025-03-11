
import {Routes, Route} from 'react-router'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import './App.css'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import GameCreate from './components/game-create/Gamecreate.jsx'

import GameCatalog from './components/game-catalog/GameCatalog.jsx'


function App() {
  

  return (
    <div id='box'>
 <Header/>
    
 <main id="main-content">
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/games' element={<GameCatalog/>}/>
  <Route path='/games/create' element={<GameCreate/>}/>
  
</Routes>

 </main>
    </div>
 
  
    )
   
}

export default App
