import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Watch } from '../Pages/SectionThree/Watch'
import { Login } from '../Pages/SectionTwo/Login'



export const Allroutes = () => {
  const user=JSON.parse(sessionStorage.getItem('user'))||""
  // console.log(user)
  return (
    <div>
        <Routes>
            <Route path='/' element={user ? <Home/>:<Navigate to="/login"/>}/>
            <Route path='/watch' element={user ? <Watch/>:<Navigate to="/login"/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}
