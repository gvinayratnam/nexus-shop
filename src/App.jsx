import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<h1 className='text-amber-300'>nexus mall</h1>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
