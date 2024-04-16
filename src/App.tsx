import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './presentation/login/login'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App