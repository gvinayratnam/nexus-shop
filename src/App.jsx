import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1 className='text-amber-300'>nexus mall</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
