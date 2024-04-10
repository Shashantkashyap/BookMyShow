import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Booking from './pages/Booking'
import PreviousBooking from './pages/PreviousBooking'
import Contact from './pages/Contact'

function App() {
  
  return (
    <div className=' bg-gray-300'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/previousBooking' element={<PreviousBooking/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </div>
   )
}

export default App
