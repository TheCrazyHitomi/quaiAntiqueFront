import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Galerie from './pages/Galerie/galerie'
import Signin from './pages/signin';
import ErrorPage from './pages/404';
import Signup from './pages/signup';



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/connexion" element={<Signin />} />
            <Route path="/inscription" element={<Signup />} />
            <Route path="/404" element={<ErrorPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
