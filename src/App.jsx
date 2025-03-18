import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './style/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Galerie from './pages/Galerie/galerie'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerie" element={<Galerie />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
