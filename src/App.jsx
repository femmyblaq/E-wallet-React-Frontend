import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ForgetPassword from './Pages/ForgetPassword'
import Dashboard from './Pages/Dashboard/Dashboard'
import FundTransfer from './Pages/Dashboard/FundTransfer'
import { Routes, Route, useLocation } from 'react-router-dom'



function App() {
  const location = useLocation();
  const excludeComp = ['/register', '/login', '/forgetpassword', '/dashboard']

  const hideComponent = excludeComp.includes(location.pathname);
  return (
    <>
        {!hideComponent && <Home />}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} >
            <Route path='/fundTransfer' element={<FundTransfer />}></Route>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
