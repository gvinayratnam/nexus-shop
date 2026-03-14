import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/customer/Home'
import Check from './Check'

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      <Check/>
    </>
  )
}

export default App
