import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useContext } from "react";
import UserContext from "./contexts/UserContext";
import MainPage from "./MainPage";
import SignUpPage from "./SignUpPage";

export default function App() {
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
