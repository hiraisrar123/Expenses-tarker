import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './components/signup'
import LoginPage from './components/login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
