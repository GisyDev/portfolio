import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './portfolio/page/Home'
import LanguageModal from './portfolio/modals/LanguajeModal'
import PortfolioLayout from './portfolio/layout/PortfolioLayout'
import AboutMe from './portfolio/page/AboutMe'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Portafolio */}
        <Route path="/" element={<Navigate to="/portfolio" replace />} />

        <Route element={<PortfolioLayout />}>
          <Route path='/portfolio' element={<Home />}/>
            {/* <Route path='lenguaje/:lang' element={<LanguageModal />} /> */}
       
            <Route path='/portfolio/SobreMi' element={<AboutMe />} /> 
        </Route>


        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Dashboard />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
