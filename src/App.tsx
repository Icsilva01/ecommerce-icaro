import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./Routes";
import { AuthProvider } from "./provider/AuthProvider";
import "./i18n/i18n";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
