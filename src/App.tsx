import './App.css'
import Header from './components/header/Header'
import MainPage from './pages/mainPage/MainPage'
import CarDetailsPage from './pages/carDetails/CarDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/car/:carName' element={<CarDetailsPage/>} />
          </Routes>
          <ToastContainer
            position='top-center'
            autoClose={3000}
            hideProgressBar={false}
            closeButton={false}
            pauseOnHover={false}
            theme="colored"
          />
      </BrowserRouter> 
    </>
  )
}

export default App
