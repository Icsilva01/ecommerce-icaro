import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ForgetPassword, Home, Login, SignUp } from "./presentation";
import { AuthProvider } from "./provider/AuthProvider";
import { useAuth } from "./utils/useAuth";

function RoutesComponent() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;
