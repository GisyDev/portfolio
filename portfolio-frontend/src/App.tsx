import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './portfolio/page/Home'
import PortfolioLayout from './portfolio/layout/PortfolioLayout'
import AboutMe from './portfolio/page/AboutMe'


function App() {

  return (
    <HashRouter>
      <Routes>

      
        <Route element={<PortfolioLayout />}>
<<<<<<< HEAD
          <Route path='/portfolio' element={<Home />}>
            <Route path='lenguaje/:lang' element={<LanguageModal />} />
          </Route >
          <Route path='/portfolio/SobreMi' element={<AboutMe />} />

=======
          <Route path='/' element={<Home />}/>
            {/* <Route path='lenguaje/:lang' element={<LanguageModal />} /> */}
       
            <Route path='/SobreMi' element={<AboutMe />} /> 
>>>>>>> 46175bfa0d9301df2f7602a081db73d23308daf7
        </Route>


        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Dashboard />} /> */}

      </Routes>
    </HashRouter>
  )
}

export default App
