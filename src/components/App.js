import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useContext } from "react";5
import UserContext from "./contexts/UserContext";


export default function App() {
  const [token, setToken] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <UserContext.Provider value={{token, setToken}}>
            <Route path="/" element={<MainPage />} />
        </UserContext.Provider>  
      </Routes>
    </BrowserRouter>
  );
}
