import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ForgetPassword, Home, Login, SignUp } from "./presentation";
import { AuthProvider } from "./provider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
