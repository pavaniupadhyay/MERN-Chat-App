import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/auth/Auth'
import Chat from './pages/chat/Chat'
import Profile from './pages/profile/Profile'

function App() {
 
 
  return (
    <div>
      <Routes>
      <Route path='/' element={<Navigate to="/auth"/>}/>
      <Route path="/auth" element={<Auth />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
      

  )
}

export default App
