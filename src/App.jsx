
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'
import Header from './Components/Header'
import Cart from './Pages/Cart'


function App() {
 

  return (
    <>
   <Header/>

   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Wishlist' element={<Wishlist/>} />
    <Route path='/Cart' element={ <Cart/>  } />
    <Route path='/view/:id' element={<View/>}/>


    <Route path='/*' element={<Navigate to={"/"}/>}/>
   
  
</Routes>



    <Footer/>
    </>
  )
}

export default App
