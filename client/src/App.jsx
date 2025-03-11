
import {Routes, Route} from 'react-router'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import './App.css'


function App() {
  

  return (
    <div id='box'>
 <Header/>
    
 <main id="main-content">
<Routes>

  <Route path='/' element={<Home/>}/>
</Routes>

 </main>
    </div>
 
  
    )
   
}

export default App
