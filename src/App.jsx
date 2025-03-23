import './App.css'
import Footer from './Layout/Footer'
import Nav from './Layout/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <div className="App">
       <BrowserRouter>
       <Nav/>
      <Routes>
      <Route path='/'/>
      <Route path='/'/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
