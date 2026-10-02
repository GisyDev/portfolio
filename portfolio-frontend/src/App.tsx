import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './portfolio/page/Home'
import LanguageModal from './portfolio/modals/LanguajeModal'
import PortfolioLayout from './portfolio/layout/PortfolioLayout'
import AboutMe from './portfolio/page/AboutMe'


function App() {

  return (
    <HashRouter>
      <Routes>

        {/* Portafolio */}
        {/* <Route path="/" element={<Navigate to="/portfolio" replace />} /> */}

        <Route element={<PortfolioLayout />}>
          <Route path='/' element={<Home />}/>
            {/* <Route path='lenguaje/:lang' element={<LanguageModal />} /> */}
       
            <Route path='/SobreMi' element={<AboutMe />} /> 
        </Route>


        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Dashboard />} /> */}

      </Routes>
    </HashRouter>
  )
}

export default App
