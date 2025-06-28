import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ForgetPassword from './Pages/ForgetPassword'
import Dashboard from './Pages/Dashboard/Dashboard'
import FundTransfer from './Pages/Dashboard/FundTransfer'
import Loans from './Pages/Dashboard/Loans'
import Overview from './Pages/Dashboard/Overview'
import SetPin from './Pages/Dashboard/SetPin'
import { Routes, Route, useLocation } from 'react-router-dom'



function App() {
  const location = useLocation();
  const excludeComp = ['/register', '/login', '/forgetpassword', '/dashboard', '/dashboard/fund_transfer', '/dashboard/loans', '/dashboard/fund_transfer', '/dashboard/setpin']

  const hideComponent = excludeComp.includes(location.pathname);
  return (
    <>
        {!hideComponent && <Home />}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} >
            <Route index element={<Overview />}></Route>
            <Route path='overview' element={<Overview />}></Route>
            <Route path='fund_transfer' element={<FundTransfer />}></Route>
            <Route path='loans' element={<Loans />}></Route>
            <Route path='setpin' element={<SetPin />}></Route>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
