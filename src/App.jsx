import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Galerie from './pages/Galerie/galerie'
import ErrorPage from './pages/404';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import AccountPage from './pages/auth/account';
import EditPasswordPage from './pages/auth/editPassword';
import ReservationPage from './pages/reservations/allResa';
import ReserverPage from './pages/reservations/reserverPage';
import CartePage from './pages/carte/cartePage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/carte" element={<CartePage />} />
            <Route path="/connexion" element={<Signin />} />
            <Route path="/inscription" element={<Signup />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/editPassword" element={<EditPasswordPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/reserver" element={<ReserverPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
