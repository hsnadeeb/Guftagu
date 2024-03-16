import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from './pages/Home';

const Home =lazy(()=>import('./pages/Home'))
const Login =lazy(()=>import('./pages/Login'))
const Chat =lazy(()=>import('./pages/Chat'))
const Groups =lazy(()=>import('./pages/Groups'))


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/login' element={<Login />}/> 
      <Route path='/chat/:chatID' element={<Chat />}/> 
      <Route path='/groups' element={<Groups />}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App