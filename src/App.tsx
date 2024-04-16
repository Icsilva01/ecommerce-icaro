import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './presentation/login/login'
import './App.css'
import { ForgetPassword } from './presentation/forget-password/forget-password'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  )
}

export default App