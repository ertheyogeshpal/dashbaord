import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Class from './pages/Class'
import Fee from './pages/Fee'
import Subjects from './pages/Subjects'
import Students from './pages/Students'
import ProtectedRoutes from './components/ProtectedRoutes'
import AdminLayout from './components/AdminLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/admin' element={<AdminLayout />} >
            <Route path='' element={<Dashboard/>} />
            <Route path='class' element={<Class />} />
            <Route path='fee' element={<Fee />} />
            <Route path='subjects' element={<Subjects />} />
            <Route path='students' element={<Students />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
