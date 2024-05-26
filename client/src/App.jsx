
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SplashScreen from './SplashScreen'
import CompetitionForm from './Competition'
import ParticipationRequestForm from './ParticipationRequest'




function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<SplashScreen/>}></Route>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    
    <Route path='/home' element={<CompetitionForm/>}></Route>
    <Route path='/request' element={<ParticipationRequestForm/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
