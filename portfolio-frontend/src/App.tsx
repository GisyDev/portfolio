import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './portfolio/page/Home'
import LanguageModal from './portfolio/modals/LanguajeModal'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Navigate to="/portfolio" replace />}/>

         {/* Portafolio */}
        <Route path="/portfolio" element={<Home/>}>
          <Route path='lenguaje/:lang' element={<LanguageModal/>}/>
        </Route>



        {/* <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/account" element={<Dashboard />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
