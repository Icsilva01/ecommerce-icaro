import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ForgetPassword, Home, Login, SignUp } from "./presentation";
import { AuthProvider } from "./provider/AuthProvider";
import { useAuth } from "./utils/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {user ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
