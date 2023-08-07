import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Card from './components/Card';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
            <Route path='/:user' Component={Card} />
          </Routes>
        

      </div>
    </BrowserRouter>
  )
}

export default App;
